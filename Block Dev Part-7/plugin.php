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


}

add_action( 'init', 'wpt_register_blocks' );
