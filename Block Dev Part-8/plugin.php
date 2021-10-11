<?php
/** 
 *  Plugin Name: Advance Custom Blocks
 *  Plugin URI: https://github.com/ 
 *  Description: A Custom block created for learnirng by WebProTime team. 
 *  Version: 1.0.0 
 *  Author: WebProTime 
 * 
 */

function add_block_category( $block_categories  ) {
	array_push(
		$block_categories,
		array(
			'slug'  => 'custom-category',
			'title' => 'Custom Category', 'advance-custom-plugin',
			'icon'  => null,
		)
	);
    return $block_categories;
}
 
add_filter( 'block_categories_all', 'add_block_category');

function wpt_register_blocks() {

	// Check if Gutenberg is active.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Add block script.
	wp_register_script(
		'wpt-block', 
		plugins_url( 'build/index.js', __FILE__ ), 
		['wp-blocks', 'wp-editor', 'wp-components'] //dependencies
	);

	// Add block style.
	wp_register_style(
		'style',
		plugins_url( 'styles/style.css', __FILE__ ),
		[]
	);

	$blocks = [
		'wpt/wpt-block-1',
		'wpt/wpt-block-2',
		'wpt/wpt-block-3',
		'wpt/media'
	];


	// Register block script and style.
	foreach( $blocks as $block ) {
		register_block_type( $block, [
			'style' => 'style',
			'editor_script' => 'wpt-block',
		] );
	}

	// Register dynamic block.
	register_block_type( 'wpt/dynamic-block', array(
		'style' => 'style',
		'editor_script' => 'wpt-block',
		'render_callback' => 'wpt_dynamic_render_callback'
	) );


}

/**
 * Add the featured image to the REST API response.
 */
add_filter( 'rest_prepare_post', 'wpt_fetured_image_json', 10, 3 );

function wpt_fetured_image_json( $data, $post, $context ) {
	// Get the featured image id from the REST API response.
	$featured_image_id = $data->data['featured_media']; 

	// Get the URL for a specific image size based on the image ID.
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'full' ); // get url of the original size

	// If we have a URL, add it to the REST API response.
	if( $featured_image_url ) {
		$data->data['featured_image'] = $featured_image_url[0];
	}

	return $data;
}

/**
 * Build classes based on block attributes.
 * Returns string of classes.
 * 
 * $attributes - array - Block attributes.
 */
function wpt_block_classes( $attributes ) {
	$classes = null;
	if ( isset($attributes['align']) ) {
		$classes = 'align' . $attributes['align'] . ' ';
	}

	if ( isset($attributes['className']) ) {
		$classes .= $attributes['className']; 
	}

	return $classes;
}

/**
 * Serve up featured image is available, otherwise serve up logo.
 * Returns <img> element.
 * 
 * $post - object - The post object.
 */ 
function wpt_post_img( $post ) {
	$wpt_img = get_the_post_thumbnail( $post, 'wptFeatImg' );
	if ( empty( $wpt_img ) ) {
		$url = plugins_url( "src/place_holder.png", __FILE__ );
		$wpt_img = '<img src="' . $url . '" alt="Featured Imafge" />';
	}
	return $wpt_img;
}

function wpt_dynamic_render_callback( $attributes, $content ) {

	global $post;

	// Get the latest posts using wp_get_recent_posts().
	$recent_posts = wp_get_recent_posts ( array(
		'category' => 2,
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	
	// Check if any posts were returned, if not, say so.
	if ( 0 === count( $recent_posts ) ) {
		return 'No posts.';
	}

	// Get the post ID for the first post returned.
	$post_id = $recent_posts[0]['ID'];
	
	// Get the post object based on post ID.
	$post = get_post( $post_id );

	// Setup postdata so regular template functions work.
	setup_postdata($post);

	return sprintf(
		' <div class="container %1$s">
			<article class="singleArticle">
			<div class="cover">
				%2$s
			</div>
			<div class="content">
				<h2>%3$s</h2>
				<p>%4$s</p>
			</div>
			</article>
		</div>',
		wpt_block_classes( $attributes ),
		wpt_post_img( $post ),
		esc_html( get_the_title($post) ),
		esc_html( get_the_excerpt($post) )
	);

	// Reset postdata to avoid conflicts.
	wp_reset_postdata();
	
}

add_action( 'init', 'wpt_register_blocks' );
