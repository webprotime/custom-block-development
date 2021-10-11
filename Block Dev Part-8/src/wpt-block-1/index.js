const { registerBlockType} = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar, InspectorControls } = wp.blockEditor; //Added BlockControls and AlignmentToolbar
const {Toolbar, Button, PanelBody, PanelRow, CheckboxControl } = wp.components;


// Registering A Block
registerBlockType('wpt/wpt-block-1', {
    title: 'WPT Custom Block 1',
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
        textAlignment: {  //Alignment attribute to access the alignment in save function
			type: 'string',
		},
        checkBoxContent: {
			type: 'boolean',
			default: false
		},
    },
    supports: {
		align: ['wide', 'full']
	},

    // Block Edit Function
    edit: props => {

        const alignmentClass = (props.attributes.textAlignment != null) ? 'has-text-align-' + props.attributes.textAlignment : '';  //getting value from textAlignment attribute and checking if textAlignment property has null value then set it to empty

        return( 
            <div className={alignmentClass + ' wpt-back'}>
                <BlockControls> 
                    <AlignmentToolbar
                        value={props.attributes.textAlignment}
                        onChange={(newalign) => props.setAttributes({ textAlignment: newalign })}
                    />
                    <Toolbar>
                        <Button
                            label="custom button"
                            icon="edit"
                            className="my-custom-button"
                            onClick={() => console.log('pressed button')}
                        />
                    </Toolbar>
                </BlockControls>
                <InspectorControls>
					<PanelBody
						title="Block Setting"
						initialOpen={true}
					>
						<PanelRow>
							<CheckboxControl
								label="Checkbox"
								checked="true"
								onChange={() => console.log('check changed')}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
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
                <RichText 
                className="wpt-button"
                tagName="a"
                value={props.attributes.textButton}
                onChange={content =>  {
                            props.setAttributes( { textButton: content } );
                        }}
                />
            </div>
        )
    },

    //Block Save Function 
    save: props => {

	const alignmentClass = (props.attributes.textAlignment != null) ? 'has-text-align-' + props.attributes.textAlignment : ''; //getting value from textAlignment attribute and checking if textAlignment property has null value then set it to empty

        return( 
            <div className={alignmentClass + ' wpt-back'}>
                <h2 className="wpt-heading">
                    <RichText.Content value={props.attributes.textHeading} />
                </h2>
                <p className="wpt-para">
                    <RichText.Content value={props.attributes.textPara} />
                </p>
                <RichText.Content className="wpt-button" tagName="a" value={props.attributes.textButton} />
            </div>
        )
    },
});