import './style.scss'
import './src/footer.scss'
import './src/header.scss'
import './src/foundation.scss'

document.addEventListener('DOMContentLoaded', function() {
    let light_mode = localStorage.getItem('light_mode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableLightmode = () => {
        document.body.classList.add('light-mode');  // 统一使用 'light-mode'
        localStorage.setItem('light_mode', 'active');
    };

    const disableLightmode = () => {
        document.body.classList.remove('light-mode');
        localStorage.setItem('light_mode', null);
    };

    if (light_mode === 'active') enableLightmode();

    themeSwitch.addEventListener("click", () => {
        light_mode = localStorage.getItem('light_mode');
        if (light_mode !== "active") {
            enableLightmode();
        } else {
            disableLightmode();
        }
    });
});