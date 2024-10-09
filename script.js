import './style.scss'
import './src/footer.scss'
import './src/header.scss'
import './src/foundation.scss'

let button = document.querySelector('.theme-switch');


button.addEventListener('click',function(){

    let currentTheme = document.querySelector('html').getAttribute('data-theme')
    if (currentTheme === 'light'){

        document.querySelector('html').setAttribute('data-theme','dark')
        sessionStorage.setItem('selectedTheme','dark')
    }else{
        document.querySelector('html').setAttribute('data-theme','light')
        sessionStorage.setItem('selectedTheme','light')
    }
})

if(sessionStorage.getItem('selectedTheme')){
    document.querySelector('html').setAttribute('data-theme',sessionStorage.getItem('selectedTheme'))
}