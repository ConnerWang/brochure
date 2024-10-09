import './style.scss'
import './src/footer.scss'
import './src/header.scss'
import './src/foundation.scss'

let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
};

if (lightmode === 'active') enableLightmode();

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    if (lightmode !== "active") {
        console.log("Enabling light mode");
        enableLightmode();
    } else {
        console.log("Disabling light mode");
        disableLightmode();
    }
});