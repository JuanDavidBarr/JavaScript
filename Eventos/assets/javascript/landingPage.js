// //Select the buttons of the images slider
// const buttons = document.querySelectorAll(".slider__button")
// buttons.forEach(button => {
//     button.addEventListener("click", (e) =>{
//         e.preventDefault();
//         const currentIndex = button.dataset.sliderButton === "next" ? 1 : -1;
//         const slides = document.querySelector(".slider__list");
//         const activeSlide =  slides.querySelector("[data-active]");
//         //Creates an array from the elements inside de Ul
//         const slidesArray = Array.from(slides.children);
//         //Get index of the image that's being displayed
//         let newIndex = slidesArray.indexOf(activeSlide) + currentIndex;
//         //Whenever you press the previous button being in the FIRST image, it'll get you to the LAST one.
//         if (newIndex < 0){
//             newIndex = slides.children.length - 1;
//         //Whenever you press the next button being in the LAST image, it'll get you to the FIRST one.
//         } else if (newIndex >= slides.children.length){
//             newIndex = 0;
//         }
//         //adds the custom property data-active to the image that will be shown.
//         slides.children[newIndex].dataset.active = true;
//         delete activeSlide.dataset.active;
//     } )
// });
// //Navbar burguer menu
// const burguerMenu = document.querySelector(".navbar-burger");
// const options = document.querySelector(".navbar-menu");
// burguerMenu.addEventListener("click", ()=>{
//     options.classList.toggle("is-active");
// })
// /* ---------------------------->Events landing page<----------------------------*/
// //Gets events
// async function getEvents() {
//     try{
//         const response = await fetch("http://localhost:3000/Cards");
//         if(!response.ok){
//             throw new Error("Could not fetch the resource");
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch(error){
//         console.error("Error when getting events:", error);       
//     }  
// }
// //Displays events in events section
// async function display() {
//     const eventsContainer = document.getElementById("events-container");
//     const events = await getEvents();
//     events.forEach(element => {
//         const card = `<div class="column is-one-third">
//                         <div class="card">
//                             <div class="card-image">
//                                 <figure class="image is-4by3">
//                                     <img
//                                         src="${element.src}"
//                                         alt="${element.alt}"
//                                     />
//                                 </figure>
//                             </div>
//                             <div class="card-content">
//                                 <div class="media">
//                                     <div class="media-content">
//                                         <p class="title is-5">${element.title}</p>
//                                         <p class="subtitle is-6 mb-0">${element.location}</p>
//                                         <p class="subtitle is-6 has-text-weight-bold">${element.date}</p>
//                                         <a href="#"><p class="title is-4 has-text-link">Ver más</p></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>`
//         eventsContainer.innerHTML += card;
//     }) 
// }
// display();
/* ---------------------------->Form<----------------------------*/
const input = Array.from(document.getElementsByClassName("input"));
const formButton = document.getElementById("form-button");
const messagesContact = {};
//gets information from input fields and store it in an object
formButton.addEventListener("click", () => {
    input.forEach(element => {
        messagesContact[element.name] = element.value
    });
})
//sends information to db.json
async function postMessagesContact (){
    try{
        const response = await fetch("http://localhost:3000/Messages", )
    } catch {

    }
}


