const hamburgerBtn = document.querySelector('.hamburger');
const mobilenavigationList = document.querySelector('.mobilenavigationList');
const mobilenavigation = document.querySelector('.mobilenavigation');
const logo = document.querySelector('.logo');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobilenavigationList.classList.toggle('active');
    mobilenavigation.classList.toggle('active');
    logo.classList.toggle('active');
});

const filterBtn = document.querySelector('.fliterIcon');
const fliterMoblie = document.querySelector('.fliter-moblie');

filterBtn.addEventListener('click', () => {
    fliterMoblie.classList.toggle('active');
});

const smallWidth = document.querySelectorAll('.smallWidth');

function smallScreen() {
    if(window.outerWidth < 384){
        smallWidth.forEach(smClass => {
            smClass.classList.add('col-12');
        });
    }else{
        smallWidth.forEach(smClass => {
            smClass.classList.remove('col-12');
        });
    }
}

window.addEventListener("resize", smallScreen);