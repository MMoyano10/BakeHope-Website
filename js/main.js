let slideIndex = 1;
showSlides(slideIndex);

// Controles de flechas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Mostrar la diapositiva
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

// Cambiar automáticamente cada 6 segundos
setInterval(() => {
    plusSlides(1);
}, 6000);