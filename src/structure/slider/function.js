let indice = 1;
showSlides(indice);

function aheadSlide(n){
    showSlides( indice+=n );
}

function positionSlide(n){
    showSlides(indice=n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('card');
    let position = document.getElementsByClassName('position');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i = 0; i < position.length; i++){
        position[i].className = position[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    position[indice-1].className += ' active';

}