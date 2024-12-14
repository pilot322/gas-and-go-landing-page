const initial_offset_ms = 2300;

document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    const fuelText = document.getElementById('fuel');
    const yourText = document.getElementById('your');
    const dayText = document.getElementById('day');
    const button1 = document.getElementById('tiktok');
    const button2 = document.getElementById('instagram');
    const button3 = document.getElementById('maps');

    const needle = document.getElementById('needle');
    const rev_gauge_container = document.getElementById('rev-gauge-container');
    const rev_needle = document.getElementById('needle2');
    const rev_needle_container = document.getElementById('rev-gauge-needle-container');
    const fuelgaugecontainer = document.getElementById('fuel-gauge-container');
    fuelgaugecontainer.classList.add('show');
    // fuelgaugecontainer.classList.remove('hidden'); 

    function rotateNeedle(degrees) {
        needle.style.transform = `rotate(${degrees}deg)`;
    }
    
    setTimeout(() => {
        rotateNeedle(62-87);
    }, 0);
   

    setTimeout(() => {
        fuelgaugecontainer.classList.remove('show');
    }, initial_offset_ms - 300);
    
    

    function startLightsAnimation() {
        lights.forEach((light, index) => {
            setTimeout(() => {
               // light.style.backgroundColor = '#FF2222';
                light.classList.add('active');
                light.classList.remove('opacity-0');
                // Sync text animation with the last three lights
                if (index === 1) {
                    rev_gauge_container.classList.add('show');
                    rev_needle_container.classList.add('show');
                }
                if (index === 2) {
                    fuelText.classList.remove('opacity-0');
                    //fuelText.classList.add('neon-text-'+(index-1));
                    
                } else if (index === 3) {
                    yourText.classList.remove('opacity-0');
                    //yourText.classList.add('neon-text-'+(index-1));
                } else if (index === 4) {
                    dayText.classList.remove('opacity-0');
                    //dayText.classList.add('neon-text-'+(index-1));
                    

                    // Add jitter effect to the text on the final light
                    fuelText.classList.add('jitter');
                    yourText.classList.add('jitter');
                    dayText.classList.add('jitter');

                    rev_needle_container.classList.add('jitter');
                    rev_gauge_container.classList.add('jitter');
                }
            }, index * 1000 + initial_offset_ms); // Lights animate one by one every 1 second
        });
    }
    setTimeout(()=>{
        button1.classList.remove('opacity-0');
        button2.classList.remove('opacity-0');
        button3.classList.remove('opacity-0');
    }, initial_offset_ms + 5500);
    startLightsAnimation();
});

