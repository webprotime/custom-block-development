const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;


// Registering A Block
registerBlockType('wpt/wpt-block', {
    title: 'WPT Custom Block',
    category: 'custom-category',
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
    edit: props => {
        return( 
            <div className="wpt-back">
                <h2 className="wpt-heading">
                    <RichText 
                    value={props.attributes.textHeading}
                    onChange={content =>  {
                                props.setAttributes( { textHeading: content } );
                            }}
                    />
                </h2>
                <p className="wpt-para">
                    <RichText 
                    value={props.attributes.textPara}
                    onChange={content =>  {
                                props.setAttributes( { textPara: content } );
                            }}
                    />
                </p>
                <a className="wpt-button">
                    <RichText 
                    tagName="a"
                    value={props.attributes.textButton}
                    onChange={content =>  {
                                props.setAttributes( { textButton: content } );
                            }}
                    />
                </a>
            </div>
        )
    },

    //Block Save Function 
    save: props => {
        return( 
            <div className="wpt-back">
                <h2 className="wpt-heading">
                    <RichText.Content value={props.attributes.textHeading} />
                </h2>
                <p className="wpt-para">
                    <RichText.Content value={props.attributes.textPara} />
                </p>
                <a className="wpt-button">
                    <RichText.Content  tagName="a" value={props.attributes.textButton} />
                </a>
            </div>
        )
    },
});