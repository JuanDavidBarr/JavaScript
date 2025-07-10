const URL_APP = "http://localhost:3000/"
const registerInputContent = Array.from(document.getElementsByClassName("input"));
console.log(registerInputContent[0].value);

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
async function createUsers(url, data) {
    try{
        const response = await fetch(url+"Users",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error("Couldn't add resource");
        }
        const data = await response.json();
        console.log("User has been created");
    }
    catch(error){
        console.error("Error when creating user:", error)
    }
}
registerButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const username = registerInputContent.value[0];
})