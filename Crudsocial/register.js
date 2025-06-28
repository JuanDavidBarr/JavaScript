//getting button and form elements from html
const myButton = document.getElementById("myButton");
const myForm = document.getElementById("myForm");
const myInputConfirmPasswordContainer = document.getElementById("confirmPasswordContainer");
//array of form elements without the button
const myInput = myForm.elements;


//Capture the information on the input field
myForm.addEventListener("submit", (event)=>{
    //Prevent the page to reload when clicking on the submit button
    event.preventDefault();
    const password = myForm.elements["password"].value;
    const passwordConfirm = myForm.elements["passwordConfirmation"].value;
    if (password !== passwordConfirm){
        myInputConfirmPasswordContainer.innerHTML
    }
    //loop over the array of inputs
    for (const element of myInput) {
        //validate whether there input element has the name property, so we can rule out the button
        if(element.name){
            //set the elements of the element in the local storage
            localStorage.setItem(element.name, element.value);
        }
    }

})














//myButton.addEventListener("submit",);
