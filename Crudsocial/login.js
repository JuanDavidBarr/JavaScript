//Retrieve the information store in local storage
//Turn the string stored into a js object using JSON.parse
let profile = JSON.parse(localStorage.getItem("Profile"));
//getting button and form elements from html
const myButton = document.getElementById("myButton");
const myForm = document.getElementById("myForm");
//array of form elements without the button
const myInput = myForm.elements;
const message = document.createElement("span");
//remove error message and error styles if any
document.addEventListener("click", ()=>{
        message.remove();
        myForm.elements["password"].style.borderColor = "";
        myForm.elements["userName"].style.borderColor = "";
        myForm.elements["email"].style.borderColor = "";
})
//Capture the information on the input field
myForm.addEventListener("submit", (event)=>{
    //Prevent the page to reload when clicking on the submit button
    event.preventDefault();
    const userLogIn = {};
    for (const element of myInput) {
        //validate whether the input element has the name property, so we can rule out the button
        if(element.name){
            //add the pairs to the object user
            userLogIn[element.name] = element.value;
            console.log(userLogIn);         
        }
    }
    //loop through login inputs, profile stored in local storage and object values
    for (let index = 0; index < 3; index++) {
        if(Object.values(profile)[index] == Object.values(userLogIn)[index]){
        } else {
            //styling error message
            message.style.color = "red";
            message.style.fontSize = "x-small";
            message.style.display = "flex";
            message.style.justifyContent = "center";
            myForm.elements[index].style.borderColor = "red";
            message.innerHTML = `The ${Object.keys(profile)[index]} does not match`;
            //add span with alert message below confirmpassword field
            lastContainer.appendChild(message);
            return;
        }      
    }
    //styling login confirmation
    message.style.color = "green";
    message.style.fontSize = "x-small";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.innerHTML = "Welcome back!";
    //add span with confirmation message below confirmpassowrd field
    lastContainer.appendChild(message);
    //remove text from input fields after submitting information
    for (const element of myForm.elements) {
        if(element.name){
            element.value = "";      
        }
    }
})
