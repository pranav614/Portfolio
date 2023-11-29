document.addEventListener("DOMContentLoaded", function () {
    // Get the particles-js container
    var particlesContainer = document.getElementById("particles-js");

    // Check the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

 
    var particleSettings = {
        number: { value: screenWidth <= 780 ? 50 : 80, density: { enable: true, value_area: 800 } },
        color: { value: '#B20F3F' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#B20F3F', opacity: 0.6, width: 1 },
        move: { enable: true, speed: screenWidth <= 780 ? 10 : 20, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        
    };


    particlesJS('particles-js', {
        particles: particleSettings,
        interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } },
        retina_detect: true
   
    });


    var contentHeight = document.getElementById("content").offsetHeight;
    particlesContainer.style.height = contentHeight + "px";
});


let mobileNav = document.querySelector(".navSubMobile");
let closeDiv = document.querySelector(".close");
let menu = document.querySelector(".menu");

const openBar = () => {
    mobileNav.style.display = "flex";
    menu.style.display = "none";
}

const closeFunc = () => {
    mobileNav.style.display = "none";
    menu.style.display = "block";
};

console.log("hello");
