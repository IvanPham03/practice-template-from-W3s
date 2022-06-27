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