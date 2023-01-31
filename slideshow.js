let slideindex = 1;

function plusSlides(n) {
    showslides(slideindex += n);
}

function currentslide(n) {
    showslides(slideindex = n);
}

function showslides(n) {
    let i;
    let slide = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slide.length) {slideindex = 1}
    if (n < 1) {slideindex = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideindex - 1].style.display = 'block';
    dots[slideindex-1].className += " active";
}

showslides();