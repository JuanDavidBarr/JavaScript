const loginInputContent = Array.from(document.getElementsByClassName("input"));
const URL_APP = "http://localhost:3000/"
const loginButton = document.getElementById("login-button");
console.log(loginInputContent);
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
    catch{
        console.log("Error when getting information");
    }
}

//AUTHENTICATION AND VALIDATION
loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await getUsers(URL_APP);
    const emailName = loginInputContent[0].value;
    const password = loginInputContent[1].value;
    if(emailName.length === 0 || password.length === 0){
        console.error("All fields must be filled");
        return;
    }
    data.forEach(element => {
        if(emailName === element.name || emailName === element.email && password === element.password){
            sessionStorage.setItem("authentication", "true");
            window.location = "./landingPage.html";
        } else {
            console.error("either the password or email/username is incorrect");
            //window.location = "./register.html";
        }
    });
   
})

