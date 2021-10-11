<?php
/** 
 * Plugin Name: WPT Custom Blocks
 * Plugin URI: https://github.com/ 
 *  Description: A Custom block created for learnirng by WebProTime team. 
 *  Version: 1.0.0 
 *  Author: WebProTime 
 * 
 */

function wpt_register_blocks() {

	// Check if Gutenberg is active.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Add block script.
	wp_register_script(
		'wpt-block', 
		plugins_url( 'wpt-block/wpt-block.js', __FILE__ ), 
		['wp-blocks', 'wp-editor'] //dependencies
	);

	// Add block style.
	wp_register_style(
		'style',
		plugins_url( 'wpt-block/style.css', __FILE__ ),
		[]
	);


	// Register block script and style.
	register_block_type( 'wpt/wpt-block', [
		'style' => 'style',
		'editor_script' => 'wpt-block',
	] );
}

add_action( 'init', 'wpt_register_blocks' );
