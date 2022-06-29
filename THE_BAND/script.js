let indexShow = 0;
showSlides();

function showSlides(){
    let i = 0;
    let slide = document.getElementsByClassName(`mySlides`);
    for( i = 0; i < slide.length ; i++){
        slide[i].style.display = "none";
    }
    indexShow ++;
    if (indexShow > slide.length) {
        indexShow = 1;
    }
    slide[indexShow-1].style.display = 'block';
    setTimeout(showSlides, 2000);
}



const btnTickets = document.querySelectorAll(".button-buy");
const modal =  document.querySelector('.modal')

const removes = document.getElementsByClassName('button-close');

function clickToShow() {
    modal.classList.add('open');
}
function hidden(){
    modal.classList.remove('open');
}

for(const btnTicket of btnTickets){
    btnTicket.addEventListener('click', clickToShow);
}

for(const remove of removes){
    remove.addEventListener('click', hidden);
}


var showMenu = document.getElementById('menu-mobile');
var nav = document.getElementById('header');
showMenu.onclick = function () {
    var height = nav.clientHeight === 40;
    if(height){
        nav.style.height = 'auto';
    }
    else {
        nav.style.height = "40px";
    }
}



