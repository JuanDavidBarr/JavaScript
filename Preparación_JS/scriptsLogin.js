const loginInputContent = Array.from(document.getElementsByClassName("input"));
const URL_APP = "http://localhost:3000/"
const loginButton = document.getElementById("login-button");
const createAccButton = document.getElementById("create-account-button");
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
//AUTHENTICATION AND VALIDATION
loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const messages = document.querySelectorAll("[data-hidden]");
    messages.forEach(element => {
        if(element.dataset.hidden === "false"){
            element.classList.add("is-hidden");
            element.dataset.hidden = "true";
        }
    });
    const data = await getUsers(URL_APP);
    let isEmpty;
    //VALIDATING INPUTS ARE NOT EMPTY
    loginInputContent.forEach(element => {
        if(element.value.length === 0){
            const emptyMessage = document.querySelector(`.${element.name}`);
            emptyMessage.classList.remove("is-hidden");
            emptyMessage.dataset.hidden = "false"
            isEmpty = true;
        }
    })
    if(isEmpty){
        return;
    }
    const emailName = loginInputContent[0].value;
    const password = loginInputContent[1].value;
    //VALIDATING EMAIL/NAME AND PASSWORD
    const serchUser = data.find(element => element.name === emailName || emailName === element.email);
    console.log(serchUser);
    if (!serchUser){
        const incorrectUser = document.querySelector(".user-incorrect");
        incorrectUser.classList.remove("is-hidden");
        incorrectUser.dataset.hidden = "false";
        return;
    } else if (serchUser.password !== password){
        const incorrectPassword = document.querySelector(".password-incorrect");
        incorrectPassword.classList.remove("is-hidden");
        incorrectPassword.dataset.hidden = "false";
        return;
    } else {
        sessionStorage.setItem("authentication", "true");
        localStorage.setItem("userLogged", JSON.stringify(serchUser.id));
        window.location = "./landingPage.html";
    }
})
//GOING TO REGISTER SECTION
createAccButton.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location = "./register.html";
})

