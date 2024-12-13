document.addEventListener('DOMContentLoaded', () => {
    const revMeter = document.querySelector('.rev-meter');
    const fuelText = document.getElementById('fuel');
    const yourText = document.getElementById('your');
    const dayText = document.getElementById('day');
    const meterBar = document.createElement('div');

    // Create a dynamic bar inside the rev meter
    meterBar.classList.add('meter-bar');
    revMeter.appendChild(meterBar);

    // Function to update the rev meter width
    function updateRevMeter(width) {
        meterBar.style.width = width + '%';
    }

    // Function to add jitter effect
    function addJitter(element) {
        element.classList.add('jitter');
    }

    // Function to remove jitter effect
    function removeJitter(element) {
        element.classList.remove('jitter');
    }

    // Sequential animation
    setTimeout(() => {
        fuelText.style.opacity = '1';
        fuelText.style.transform = 'translateY(0)';
        updateRevMeter(30); // Rev meter rises to 30%
        addJitter(fuelText);
    }, 500);

    setTimeout(() => {
        yourText.style.opacity = '1';
        yourText.style.transform = 'translateY(0)';
        updateRevMeter(60); // Rev meter rises to 60%
        addJitter(yourText);
    }, 1500);

    setTimeout(() => {
        dayText.style.opacity = '1';
        dayText.style.transform = 'translateY(0)';
        updateRevMeter(100); // Rev meter redlines at 100%
        addJitter(dayText);
    }, 2500);
});

