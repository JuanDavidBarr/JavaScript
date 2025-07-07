//Select the buttons of the images slider
const buttons = document.querySelectorAll(".slider__button")

buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
        e.preventDefault();
        const currentIndex = button.dataset.sliderButton === "next" ? 1 : -1;
        const slides = document.querySelector(".slider__list");
        const activeSlide =  slides.querySelector("[data-active]");
        //Creates an array from the elements inside de Ul
        const slidesArray = Array.from(slides.children);
        //Get index of the image that's being displayed
        let newIndex = slidesArray.indexOf(activeSlide) + currentIndex;
        //Whenever you press the previous button being in the FIRST image, it'll get you to the LAST one.
        if (newIndex < 0){
            newIndex = slides.children.length - 1;
        //Whenever you press the next button being in the LAST image, it'll get you to the FIRST one.
        } else if (newIndex >= slides.children.length){
            newIndex = 0;
        }
        //adds the custom property data-active to the image that will be shown.
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    } )
});
//Navbar burguer menu
const burguerMenu = document.querySelector(".navbar-burger");
const options = document.querySelector(".navbar-menu");
burguerMenu.addEventListener("click", ()=>{
    options.classList.toggle("is-active");
})