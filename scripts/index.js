const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__list > li > a');
links[0].classList.add('cw')
burger.addEventListener('click', function(){
    burger.classList.toggle('burger__active')
    nav.classList.toggle('nav__active')
})

//////

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        for (let k = 0; k < links.length; k++) {
        links[k].classList.remove('cw')
        }
        links[i].classList.add('cw')
    })
}

/////

const tabs = document.querySelectorAll('.sec6__tabs > li > p')
tabs[1].classList.add('bbc')

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        for (let k = 0; k < tabs.length; k++) {
        tabs[k].classList.remove('bbc')
        }
        tabs[i].classList.add('bbc')
    })
}


/////

const heart = document.querySelectorAll('.fa-heart')
for(let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', function(){
        this.classList.toggle('ch')
    })
}