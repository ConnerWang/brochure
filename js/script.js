import '../css/foundation.scss'
import '../css/style.scss'
import '../css/footer.scss'
import '../css/header.scss'
import '../css/responsive.scss'



let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add('lightmode'); // Correct class name used here
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode'); // Corrected class name
    localStorage.setItem('lightmode', null);
};

if (lightmode === 'active') enableLightmode();

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode'); // Corrected key name
    if (lightmode !== "active") {
        console.log("Enabling light mode");
        enableLightmode();
    } else {
        console.log("Disabling light mode");
        disableLightmode();
    }
});