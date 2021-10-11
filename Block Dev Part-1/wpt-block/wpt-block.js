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
                el('p', null , "Hello World! Edit!")
            )
        },

        //Block Save Function
		save: function() {
            return( 
                el('p', null , "Hello World! Save!")
            )
        },
	} );
})( window.wp.blocks, window.wp.element);