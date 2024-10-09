import './src/style.scss'
import './src/footer.scss'
import './src/header.scss'
import './src/foundation.scss'

    let lightmode = localStorage.getItem('lightmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableLightmode = () => {
        document.body.classList.add('lightmode');  // 统一使用 'light-mode'
        localStorage.setItem('lightmode', 'active');
    };

    const disableLightmode = () => {
        document.body.classList.remove('light-mode');
        localStorage.setItem('lightmode', null);
    };

    if (lightmode === 'active') enableLightmode();

    themeSwitch.addEventListener("click", () => {
        lightmode = localStorage.getItem('light_mode');
        if (lightmode !== "active") {
            console.log("Enabling light mode");
            enableLightmode();
        } else {
            console.log("Disabling light mode");
            disableLightmode();
        }
    });