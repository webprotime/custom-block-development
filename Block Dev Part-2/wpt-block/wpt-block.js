( function( blocks, element) {
	var el = element.createElement;


    // Registering A Block
    blocks.registerBlockType('wpt/wpt-block', {
        title: 'WPT Custom Block',
        category: 'common',
        icon: 'superhero',
        description: 'First Hello World Block',
        keyword: ['test', 'searchme'],

        // Block Edit Function
		edit: function() {
            return( 
                el('div', {className:'wpt-heading'} ,
                    el(
                        'h2', {},"HEADING"
                    ),
                    el(
                        'p', {className:'wpt-para'},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ),
                    el(
                        'a', {className:'wpt-button', href:'https://example.com'} , "Click Me"
                    ),
                )
            )
        },

        //Block Save Function
		save: function() {
            return( 
                el('div', {className:'wpt-heading'} ,
                    el(
                        'h2', {},"HEADING"
                    ),
                    el(
                        'p', {className:'wpt-para'},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ),
                    el(
                        'a', {className:'wpt-button', href:'https://example.com'} , "Click Me"
                    ),
                )
            )
        },
	} );
})( window.wp.blocks, window.wp.element);