// Translating strings for the block
wp.i18n.setLocaleData( 'final-countdown-block', {
    dueDateLabel: 'Due Date:',
    showSecondsLabel: 'Show Seconds:',
    endMessageLabel: 'End Message:',
    dialColorLabel: 'Dial Color:',
    dialWidthLabel: 'Dial Width:',
    textColorLabel: 'Text Color:',
    textSizeLabel: 'Text Size:',
    labelColorLabel: 'Label Color:',
    labelSizeLabel: 'Label Size:',
} );

wp.blocks.registerBlockType( 'final-countdown-block/countdown', {
    title: 'Final Countdown',
    icon: 'clock',
    category: 'common',
    attributes: {
        dueDate: {
            type: 'string',
            default: '2024-07-01T03:59:59',
        },
        showSeconds: {
            type: 'boolean',
            default: false,
        },
        endMessage: {
            type: 'string',
            default: '',
        },
        endMessageColor: {
            type: 'string',
            default: '#333',
        },
        endMessageSize: {
            type: 'number',
            default: 24,
        },
        dialColor: {
            type: 'string',
            default: '#003A64',
        },
        dialWidth: {
            type: 'number',
            default: 10,
        },
        textColor: {
            type: 'string',
            default: '#333',
        },
        textSize: {
            type: 'number',
            default: 24,
        },
        labelColor: {
            type: 'string',
            default: '#666',
        },
        labelSize: {
            type: 'number',
            default: 18,
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { dueDate, showSeconds, endMessage, endMessageColor, endMessageSize, dialColor, dialWidth, textColor, textSize, labelColor, labelSize } = attributes;
        const standardColors = wp.data.select('core/editor').getEditorSettings().colors;
    
        function updateAttribute(attribute, value) {
            setAttributes({ [attribute]: value });
        }
    
        return wp.element.createElement(
            wp.element.Fragment,
            null,
            wp.element.createElement(
                wp.blockEditor.InspectorControls,
                null,
                wp.element.createElement(
                    'div',
                    { className: 'fcb-settings-panel' },
                    wp.element.createElement(
                        'h3',
                        null,
                        'Time Settings'
                    ),
                    wp.element.createElement(
                        'div',
                        null,
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Due Date:'),
                            wp.element.createElement(
                                'input',
                                {
                                    type: 'datetime-local',
                                    value: dueDate,
                                    onChange: event => updateAttribute('dueDate', event.target.value)
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Show Seconds'),
                            wp.element.createElement(
                                'input',
                                {
                                    type: 'checkbox',
                                    checked: showSeconds,
                                    onChange: event => updateAttribute('showSeconds', event.target.checked)
                                }
                            )
                        ),
                        wp.element.createElement(
                            wp.components.TextControl,
                            {
                                label: wp.i18n.__('End Message'),
                                value: endMessage,
                                onChange: value => updateAttribute('endMessage', value)
                            }
                        ),
                        wp.element.createElement(
                            wp.components.ColorPalette,
                            {
                                colors: standardColors,
                                value: endMessageColor,
                                onChange: color => updateAttribute('endMessageColor', color)
                            }
                        ),
                        wp.element.createElement(
                            wp.components.RangeControl,
                            {
                                label: wp.i18n.__('End Message Size'),
                                value: endMessageSize,
                                onChange: size => updateAttribute('endMessageSize', size),
                                min: 10,
                                max: 100
                            }
                        )
                    )
                ),
                wp.element.createElement(
                    wp.components.PanelBody,
                    {
                        title: wp.i18n.__('Design Settings'),
                        initialOpen: false,
                    },
                    wp.element.createElement(
                        'div',
                        null,
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Dial Color'),
                            wp.element.createElement(
                                wp.blockEditor.ColorPalette,
                                {
                                    colors: standardColors,
                                    value: dialColor,
                                    onChange: value => updateAttribute('dialColor', value)
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Dial Width'),
                            wp.element.createElement(
                                'input',
                                {
                                    type: 'number',
                                    value: dialWidth,
                                    onChange: event => updateAttribute('dialWidth', parseInt(event.target.value, 10))
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Text Color'),
                            wp.element.createElement(
                                wp.blockEditor.ColorPalette,
                                {
                                    colors: standardColors,
                                    value: textColor,
                                    onChange: value => updateAttribute('textColor', value)
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Text Size'),
                            wp.element.createElement(
                                'input',
                                {
                                    type: 'number',
                                    value: textSize,
                                    onChange: event => updateAttribute('textSize', parseInt(event.target.value, 10))
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Label Color'),
                            wp.element.createElement(
                                wp.blockEditor.ColorPalette,
                                {
                                    colors: standardColors,
                                    value: labelColor,
                                    onChange: value => updateAttribute('labelColor', value)
                                }
                            )
                        ),
                        wp.element.createElement(
                            'label',
                            null,
                            wp.i18n.__('Label Size'),
                            wp.element.createElement(
                                'input',
                                {
                                    type: 'number',
                                    value: labelSize,
                                    onChange: event => updateAttribute('labelSize', parseInt(event.target.value, 10))
                                }
                            )
                        )
                    )
                )
            ),
            wp.element.createElement(
                wp.components.Placeholder,
                {
                    label: 'Final Countdown',
                    instructions: 'Customize the countdown settings in the side panel.',
                }/*,
                wp.element.createElement(
                    'div',
                    { className: 'final-countdown-block-placeholder' },
                    wp.element.createElement('img', { src: 'path/to/your/placeholder-image.png', alt: 'Countdown Placeholder' })
                )*/
            )
        );
    },
    save: function(props) {
        const { attributes } = props;
        const { dueDate, showSeconds, endMessage, endMessageColor, endMessageSize, dialColor, dialWidth, textColor, textSize, labelColor, labelSize } = attributes;
    
        return wp.element.createElement(
            'div',
            { className: 'final-countdown-block', 'data-due-date': dueDate, 'data-end-message': endMessage, 'data-end-message-color': endMessageColor, 'data-end-message-size': endMessageSize },
            wp.element.createElement(
                'div',
                { className: 'fcb-days' },
                wp.element.createElement(
                    'svg',
                    { viewBox: '0 0 100 100', className: 'dial' },
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: '#ddd' }
                    ),
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: dialColor, className: 'fcb-dial-background', 'stroke-dasharray': '251', 'stroke-dashoffset': '251' }
                    )
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-value', style: { fontSize: textSize, color: textColor } },
                    '00'
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-label', style: { fontSize: labelSize, color: labelColor } },
                    'Days'
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'fcb-hours' },
                wp.element.createElement(
                    'svg',
                    { viewBox: '0 0 100 100', className: 'dial' },
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: '#ddd' }
                    ),
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: dialColor, className: 'fcb-dial-background', 'stroke-dasharray': '251', 'stroke-dashoffset': '251' }
                    )
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-value', style: { fontSize: textSize, color: textColor } },
                    '00'
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-label', style: { fontSize: labelSize, color: labelColor } },
                    'Hours'
                )
            ),
            wp.element.createElement(
                'div',
                { className: 'fcb-minutes' },
                wp.element.createElement(
                    'svg',
                    { viewBox: '0 0 100 100', className: 'dial' },
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: '#ddd' }
                    ),
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: dialColor, className: 'fcb-dial-background', 'stroke-dasharray': '251', 'stroke-dashoffset': '251' }
                    )
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-value', style: { fontSize: textSize, color: textColor } },
                    '00'
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-label', style: { fontSize: labelSize, color: labelColor } },
                    'Minutes'
                )
            ),
            showSeconds && wp.element.createElement(
                'div',
                { className: 'fcb-seconds' },
                wp.element.createElement(
                    'svg',
                    { viewBox: '0 0 100 100', className: 'dial' },
                    wp.element.createElement(
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: '#ddd' }
                    ),
                    wp.element.createElement(
                
                        'circle',
                        { cx: '50', cy: '50', r: '40', fill: 'none', strokeWidth: dialWidth, stroke: dialColor, className: 'fcb-dial-background', 'stroke-dasharray': '251', 'stroke-dashoffset': '251' }
                    )
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-value', style: { fontSize: textSize, color: textColor } },
                    '00'
                ),
                wp.element.createElement(
                    'span',
                    { className: 'fcb-label', style: { fontSize: labelSize, color: labelColor } },
                    'Seconds'
                )
            )
        );
    },    
} );

// Countdown logic
wp.hooks.addFilter( 'blocks.final-countdown-block-countdown-save', 'countdownBlockSave', function( attributes ) {
    // Add your custom logic here to save the block's data to the post content
    // Return the modified attributes object
    return attributes;
} );
