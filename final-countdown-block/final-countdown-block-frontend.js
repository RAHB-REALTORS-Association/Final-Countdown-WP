window.addEventListener('load', function() {
    const countdownElements = document.querySelectorAll('.final-countdown-block');
    countdownElements.forEach(element => {
        const endDateStr = element.getAttribute('data-due-date');
        const endMessage = element.getAttribute('data-end-message');
        const endMessageColor = element.getAttribute('data-end-message-color');
        const endMessageSize = element.getAttribute('data-end-message-size');
        const endDate = new Date(endDateStr).getTime();

        if (!isNaN(endDate)) {
            startCountdown(endDate, endMessage, endMessageColor, endMessageSize, element);
        } else {
            console.error("Invalid date parsed:", endDateStr);
        }
    });
});

function startCountdown(endDate, endMessage, endMessageColor, endMessageSize, element) {
    var interval = setInterval(function() {
        let now = new Date().getTime();
        let difference = endDate - now; // This will be in milliseconds

        let seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
        let minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0');
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        let days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');

        // Total periods for each unit
        let totalDays = 365;
        let totalHours = 24;
        let totalMinutes = 60;
        let totalSeconds = 60;

        // Update the text content of each part of the countdown
        updateDial(element.querySelector('.fcb-days'), days, totalDays);
        updateDial(element.querySelector('.fcb-hours'), hours, totalHours);
        updateDial(element.querySelector('.fcb-minutes'), minutes, totalMinutes);
        updateDial(element.querySelector('.fcb-seconds'), seconds, totalSeconds);

        if (difference < 0) {
            clearInterval(interval);
            element.innerHTML = `<p style="color: ${endMessageColor}; font-size: ${endMessageSize}px;">${endMessage}</p>`;
        }
    }, 1000);
}

function updateDial(dialElement, value, total) {
    if (dialElement) {
        dialElement.querySelector('.fcb-value').textContent = value;
        let progress = (1 - value / total) * 251;
        let circle = dialElement.querySelector('.fcb-dial-background');
        circle.setAttribute('stroke-dashoffset', progress);
    }
}
