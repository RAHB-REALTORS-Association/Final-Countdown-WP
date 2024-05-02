# The Final Countdown Block
 
The Final Countdown Block is a simple, easy-to-use countdown timer for the WordPress block editor that allows users to set a specific date and time for an event countdown.

## Installation

1. Unzip the `final-countdown-block` directory to the `/wp-content/plugins/` directory, or upload a `.zip` file downloaded from the [releases page](https://github.com/RAHB-REALTORS-Association/Final-Countdown-WP/releases) through the WordPress **Add Plugin** screen directly.
2. Activate the plugin through the **Installed Plugins** screen in WordPress.

## Usage

### Block Editor:
1. Add the **Final Countdown** block to your post or page.
2. Customize the countdown settings in the side panel.

### Shortcode:
Use the `[final_countdown]` shortcode with the following optional parameters:
- `due_date`: Target date and time (default: '2024-07-01T03:59:59').
- `show_seconds`: Display seconds? 'true' or 'false' (default: 'false').
- `end_message`: Message to display when countdown ends (default: 'It's time!').
- `end_message_color`: End message color (default: '#333').
- `end_message_size`: End message font size (default: '24px').
- `dial_color`: Dial color (default: '#003A64').
- `dial_width`: Dial width (default: '10').
- `text_color`: Text color (default: '#333').
- `text_size`: Text font size (default: '24px').
- `label_color`: Label color (default: '#666').
- `label_size`: Label font size (default: '18px').

Example:
```
[final_countdown due_date="2025-12-31T23:59:59" show_seconds="true" end_message="Happy New Year!" end_message_color="#ff0000" dial_color="#000000"]
```

## Development

> [!WARNING]
> While this plugin has been tested up to WordPress 6.5.2, it is always best to use it on staging or development environments before deploying on production sites.

## Changelog

### 1.1.1
- Fixed block preview

### 1.1.0
- Added shortcode support

### 1.0.0
- Production release

### 0.1.1
- Fixed issues

### 0.1.0
- Initial release

## License

The Final Countdown Block is licensed under the GPLv2. See the included [LICENSE](LICENSE) file for more details.
