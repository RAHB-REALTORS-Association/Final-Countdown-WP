<?php
/*
Plugin Name: The Final Countdown Block
Plugin URI: https://github.com/RAHB-REALTORS-Association/Final-Countdown-WP/
Description: Adds a customizable countdown block to WordPress.
Version: 1.1.1
Author: RAHB
Author URI: https://lab.rahb.ca
License: GPL-2.0
Text Domain: final-countdown-block
*/

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// Enqueue the block's assets
function final_countdown_block_enqueue_assets() {
    wp_enqueue_script(
        'final-countdown-block-script',
        plugins_url( 'final-countdown-block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'final-countdown-block.js' ),
        true
    );

    wp_enqueue_script(
        'final-countdown-block-frontend-script',
        plugins_url( 'final-countdown-block-frontend.js', __FILE__ ),
        array( 'jquery' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'final-countdown-block-frontend.js' ),
        true
    );

    wp_enqueue_style(
        'final-countdown-block-style',
        plugins_url( 'final-countdown-block.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'final-countdown-block.css' )
    );
}
add_action( 'enqueue_block_assets', 'final_countdown_block_enqueue_assets' );

// Register the block
function final_countdown_block_register_block() {
    register_block_type('final-countdown-block/countdown', array(
        'editor_script' => 'final-countdown-block-script',
        'editor_style' => 'final-countdown-block-style',
        'render_callback' => 'final_countdown_block_render_callback',
        'attributes' => array(
            'dueDate' => array(
                'type' => 'string',
                'default' => '2024-07-01T03:59:59', // Ensure this matches the JavaScript default
            ),
            'showSeconds' => array(
                'type' => 'boolean',
                'default' => false,
            ),
            'endMessage' => array(
                'type' => 'string',
                'default' => 'It\'s time!',
            ),
            'endMessageColor' => array(
                'type' => 'string',
                'default' => '#333',
            ),
            'endMessageSize' => array(
                'type' => 'number',
                'default' => 24,
            ),
            'dialColor' => array(
                'type' => 'string',
                'default' => '#003A64',
            ),
            'dialWidth' => array(
                'type' => 'number',
                'default' => 10,
            ),
            'textColor' => array(
                'type' => 'string',
                'default' => '#333',
            ),
            'textSize' => array(
                'type' => 'number',
                'default' => 24,
            ),
            'labelColor' => array(
                'type' => 'string',
                'default' => '#666',
            ),
            'labelSize' => array(
                'type' => 'number',
                'default' => 18,
            ),
        )
    ));
}
add_action('init', 'final_countdown_block_register_block');

// Render callback
function final_countdown_block_render_callback( $attributes ) {
    wp_set_script_translations( 'final-countdown-block-script', 'final-countdown-block' );
    $due_date = isset($attributes['dueDate']) ? $attributes['dueDate'] : '2024-07-01T03:59:59';
    $show_seconds = isset( $attributes['showSeconds'] ) ? $attributes['showSeconds'] : false;
    $end_message = isset( $attributes['endMessage'] ) ? $attributes['endMessage'] : 'It\'s time!';
    $end_message_color = isset( $attributes['endMessageColor'] ) ? $attributes['endMessageColor'] : '#333';
    $end_message_size = isset( $attributes['endMessageSize'] ) ? $attributes['endMessageSize'] : '24px';
    $dial_color = isset( $attributes['dialColor'] ) ? $attributes['dialColor'] : '#003A64';
    $dial_width = isset( $attributes['dialWidth'] ) ? $attributes['dialWidth'] : '10';
    $text_color = isset( $attributes['textColor'] ) ? $attributes['textColor'] : '#333';
    $text_size = isset( $attributes['textSize'] ) ? $attributes['textSize'] : '24px';
    $label_color = isset( $attributes['labelColor'] ) ? $attributes['labelColor'] : '#666';
    $label_size = isset( $attributes['labelSize'] ) ? $attributes['labelSize'] : '18px';
    
    ob_start();
    include 'final-countdown-block-template.php';
    return ob_get_clean();
}

function final_countdown_shortcode($atts) {
    $a = shortcode_atts(array(
        'due_date' => '2024-07-01T03:59:59',
        'show_seconds' => 'false',
        'end_message' => 'It\'s time!',
        'end_message_color' => '#333',
        'end_message_size' => '24px',
        'dial_color' => '#003A64',
        'dial_width' => '10',
        'text_color' => '#333',
        'text_size' => '24px',
        'label_color' => '#666',
        'label_size' => '18px',
    ), $atts);

    $due_date = $a['due_date'];
    $show_seconds = $a['show_seconds'] === 'true';
    $end_message = $a['end_message'];
    $end_message_color = $a['end_message_color'];
    $end_message_size = $a['end_message_size'];
    $dial_color = $a['dial_color'];
    $dial_width = $a['dial_width'];
    $text_color = $a['text_color'];
    $text_size = $a['text_size'];
    $label_color = $a['label_color'];
    $label_size = $a['label_size'];

    ob_start();
    include 'final-countdown-block-template.php';
    return ob_get_clean();
}
add_shortcode('final_countdown', 'final_countdown_shortcode');
