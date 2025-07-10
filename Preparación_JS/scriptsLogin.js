const loginInputContent = Array.from(document.getElementsByClassName("input"));
const URL_APP = "http://localhost:3000/"
const loginButton = document.getElementById("login-button");
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
    const data = await getUsers(URL_APP);
    let isEmpty;
    loginInputContent.forEach(element => {
        if(element.value.length === 0){
            const emptyMessage = document.querySelector(`.${element.name}`);
            emptyMessage.classList.remove("is-hidden");
            isEmpty = true;
        }
    })
    if(isEmpty){
        return;
    }
    const emailName = loginInputContent[0].value;
    const password = loginInputContent[1].value;
    data.forEach(element => {
        if(emailName === element.name || emailName === element.email && password === element.password){
            sessionStorage.setItem("authentication", "true");
            window.location = "./landingPage.html";
        } else {
            console.error("either the password or email/username is incorrect");
        }
    });
   
})

