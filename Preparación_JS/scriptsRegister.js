const URL_APP = "http://localhost:3000/"
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
registerButton.addEventListener("click", async (e)=>{
    e.preventDefault();
    const data = await getUsers(URL_APP);
    let isEmpty; 
    registerInputContent.forEach(element => {
        if(element.value.length === 0){
            const emptyMessage = document.querySelector(`.${element.name}`);
            emptyMessage.classList.remove("is-hidden");
            isEmpty = true;
        }
    });
    if (isEmpty){
        return;
    }
    const username = registerInputContent[0].value;
    const email = registerInputContent[1].value;
    const password = registerInputContent[2].value;
    const confirmpassword = registerInputContent[3].value;
})