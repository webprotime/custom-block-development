( function( blocks, element, editor) {
	var el = element.createElement;


    // Registering A Block
    blocks.registerBlockType('wpt/wpt-block', {
        title: 'WPT Custom Block',
        category: 'common',
        icon: 'superhero',
        description: 'First Hello World Block',
        keyword: ['test', 'searchme'],
        attributes: {
            textHeading: {
                type: 'string',
                default: 'Heading'
            },
            textPara:{
                type: 'string',
                default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            textButton: {
                type: 'string',
                default: 'Click Me'
            },
        
        },

        // Block Edit Function
		edit: function(props) {
            return( 
                el('div', {className:'wpt-back'} ,
                    el(
                        editor.RichText,
                        {
                            tagName: 'h2',
                            className: 'wpt-heading',
                            value: props.attributes.textHeading,
                            onChange: function( content ) {
                                props.setAttributes( { textHeading: content } );
                            }
                        }
                    ),
                    el(
                        editor.RichText,
                        {
                            tagName: 'p',
                            className: 'wpt-para',
                            value: props.attributes.textPara,
                            onChange: function( content ) {
                                props.setAttributes( { textPara: content } );
                            }
                        }
                    ),
                    el(
                        editor.RichText,
                        {
                            tagName: 'a',
                            className: 'wpt-button',
                            value: props.attributes.textButton,
                            href:'#',
                            onChange: function( content ) {
                                props.setAttributes( { textButton: content } );
                            }
                        }
                    ),
                )
            )
        },

        //Block Save Function
		save: function(props) {
            return( 
                el('div', {className: 'wpt-back' } ,
                    el(
                        editor.RichText.Content,
                        {
                            tagName: 'h2',
                            className: 'wpt-heading',
                            value: props.attributes.textHeading,
                        }
                    ),
                    el(
                        editor.RichText.Content,
                        {
                            tagName: 'p',
                            className: 'wpt-para',
                            value: props.attributes.textPara,
                        }
                    ),
                    el(
                        editor.RichText.Content,
                        {
                            tagName: 'a',
                            className: 'wpt-button',
                            value: props.attributes.textButton,
                        }
                    ),
                )
            )
        },
	} );
})( window.wp.blocks, window.wp.element, window.wp.editor); //packages as parameter