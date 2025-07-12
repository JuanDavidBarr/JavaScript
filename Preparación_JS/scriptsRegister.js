const URL_APP = "http://localhost:3000/";
const registerInputContent = Array.from(document.getElementsByClassName("input"));
const registerButton = document.getElementById("register-button");
//GET METHOD
async function getUsers(url) {
    try{
        const response = await fetch(url+"Users");
        if(!response.ok){
            throw new Error ("Couldn't fetch resource");
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error when getting information:", error);
    }
}
//POST METHOD
async function createUsers(url,data1) {
    try{
        const response = await fetch(url+"Users",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data1)
        });
        if(!response.ok){
            throw new Error("Couldn't add resource");
        }
        const data = await response.json();
        console.log("User has been created");
        //AUTHENTICATION AND BRINGS TO PRIVATE SESSION
        const userLogged = data["id"];
        localStorage.setItem("userLogged", JSON.stringify(userLogged));
        sessionStorage.setItem("authentication", "true");
        window.location = "./landingPage.html";
    }
    catch(error){
        console.error("Error when creating user:", error)
    }
}
registerButton.addEventListener("click", async (e)=>{
    e.preventDefault();
    const messages = document.querySelectorAll("[data-hidden]");
    messages.forEach(element => {
        if(element.dataset.hidden === "false"){
            element.classList.add("is-hidden");
            element.dataset.hidden = "true";
        }
    });
    const data = await getUsers(URL_APP);
    let noAvaible = false;
    let isEmpty = false;
    //VALIDATING INPUTS ARE NOT EMPTY
    registerInputContent.forEach(element => {
        if(element.value.length === 0){
            const emptyMessage = document.querySelector(`.${element.name}`);
            emptyMessage.classList.remove("is-hidden");
            emptyMessage.dataset.hidden = "false";
            isEmpty = true;
        }
    });
    if (isEmpty){
        return;
    }
    const username = registerInputContent[0].value.trim();
    const email = registerInputContent[1].value.trim();
    const password = registerInputContent[2].value;
    const confirmpassword = registerInputContent[3].value;
    //VALIDATING THERE IS NO USERNAME OR EMAIL REPEATED
    const serchUser = data.find(element => element.name === username || element.email === email);
    if(serchUser){
        if(serchUser.name === username){
            const unavailableMessage = document.querySelector(".username-unavailable");
            unavailableMessage.classList.remove("is-hidden");
            unavailableMessage.dataset.hidden = "false";
            noAvaible = true;
        } else if (serchUser.email === email){
            const unavailableMessage = document.querySelector(".email-unavailable");
            unavailableMessage.classList.remove("is-hidden");
            unavailableMessage.dataset.hidden = "false";
            noAvaible = true;
        }
    }
    if(noAvaible){
        return;
    }
    // data.forEach(element => {
    //     if (username === element.name){
    //         const unavailableMessage = document.querySelector(".username-unavailable");
    //         unavailableMessage.classList.remove("is-hidden");
    //         isNotAvailable = true;
    //         return;
    //     } else if (email === element.email){
    //         const unavailableMessage = document.querySelector(".email-unavailable");
    //         unavailableMessage.classList.remove("is-hidden");
    //         isNotAvailable = true;
    //         return;
    //     }
    // });
    // if (isNotAvailable){
    //     return;
    // }
    //VALIDATING PASSWORD AND PASSWORDCONFIRMATION
    if(!(password === confirmpassword)){
        const noMatchMessage = document.querySelector(".no-match");
        noMatchMessage.classList.remove("is-hidden");
        noMatchMessage.dataset.hidden = "false";
        return;
    }
    newUser = {
        "name": username,
        "email": email,
        "password": password,
        "role" : "visitor",
        "cursos" : ""
    }
    createUsers(URL_APP,newUser);
})

