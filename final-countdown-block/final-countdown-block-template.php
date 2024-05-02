<div class="final-countdown-block" data-due-date="<?php echo esc_attr(date('c', strtotime($due_date))); ?>" data-end-message="<?php echo esc_attr($end_message); ?>" data-end-message-color="<?php echo esc_attr($end_message_color); ?>" data-end-message-size="<?php echo esc_attr($end_message_size); ?>">
    <div class="fcb-days">
        <svg viewBox="0 0 100 100" class="dial">
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="#ddd" />
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="<?php echo esc_attr( $dial_color ); ?>" class="fcb-dial-background" stroke-dasharray="251" stroke-dashoffset="251" />
        </svg>
        <span class="fcb-value" style="font-size: <?php echo esc_attr( $text_size ); ?>; color: <?php echo esc_attr( $text_color ); ?>">00</span>
        <span class="fcb-label" style="font-size: <?php echo esc_attr( $label_size ); ?>; color: <?php echo esc_attr( $label_color ); ?>">Days</span>
    </div>
    <div class="fcb-hours">
        <svg viewBox="0 0 100 100" class="dial">
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="#ddd" />
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="<?php echo esc_attr( $dial_color ); ?>" class="fcb-dial-background" stroke-dasharray="251" stroke-dashoffset="251" />
        </svg>
        <span class="fcb-value" style="font-size: <?php echo esc_attr( $text_size ); ?>; color: <?php echo esc_attr( $text_color ); ?>">00</span>
        <span class="fcb-label" style="font-size: <?php echo esc_attr( $label_size ); ?>; color: <?php echo esc_attr( $label_color ); ?>">Hours</span>
    </div>
    <div class="fcb-minutes">
        <svg viewBox="0 0 100 100" class="dial">
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="#ddd" />
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="<?php echo esc_attr( $dial_color ); ?>" class="fcb-dial-background" stroke-dasharray="251" stroke-dashoffset="251" />
        </svg>
        <span class="fcb-value" style="font-size: <?php echo esc_attr( $text_size ); ?>; color: <?php echo esc_attr( $text_color ); ?>">00</span>
        <span class="fcb-label" style="font-size: <?php echo esc_attr( $label_size ); ?>; color: <?php echo esc_attr( $label_color ); ?>">Minutes</span>
    </div>
    <?php if ( $show_seconds ) : ?>
    <div class="fcb-seconds">
        <svg viewBox="0 0 100 100" class="dial">
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="#ddd" />
            <circle cx="50" cy="50" r="40" fill="none" stroke-width="<?php echo esc_attr( $dial_width ); ?>" stroke="<?php echo esc_attr( $dial_color ); ?>" class="fcb-dial-background" stroke-dasharray="251" stroke-dashoffset="251" />
        </svg>
        <span class="fcb-value" style="font-size: <?php echo esc_attr( $text_size ); ?>; color: <?php echo esc_attr( $text_color ); ?>">00</span>
        <span class="fcb-label" style="font-size: <?php echo esc_attr( $label_size ); ?>; color: <?php echo esc_attr( $label_color ); ?>">Seconds</span>
    </div>
    <?php endif; ?>
</div>