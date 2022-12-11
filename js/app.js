const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2500);
})

const toggle = document.getElementById('theme-control'), text = document.querySelector('.b-site--theme-text'), moonSVG = document.querySelector('.b-icon--moon'), sunSVG = document.querySelector('.b-icon--sun'); function themeOff() { document.body.classList.add('t-dark'); sunSVG.style.display = "inline"; moonSVG.style.display = "none"; text.innerText = "too dark?" }
if (localStorage.getItem('t-dark')) { themeOff(); } else { moonSVG.style.display = "inline"; }
toggle.addEventListener('click', function (e) {
    e.preventDefault(); if (document.body.classList.contains('t-dark')) {
        document.body.classList.remove('t-dark'); moonSVG.style.display = "inline"; sunSVG.style.display = "none"; text.innerText = "too bright?"
        localStorage.removeItem('t-dark')
    } else { themeOff(); localStorage.setItem('t-dark', true) }
})