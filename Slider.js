let slideIndex=0;
const slides=document.querySelector(".slides");
const totalSlides=document.querySelectorAll(".slide").length;
console.log(slides,totalSlides);
function moveSlides(n)
{
    slideIndex += n;
    if(slideIndex >= totalSlides)
    {
        slideIndex=0;
    }
    if(slideIndex < 0)
    {
        slideIndex = totalSlides - 1;
    }
    slides.style.transform=`translateX(-${slideIndex*100}%)`;
}