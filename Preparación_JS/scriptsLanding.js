//GETS THE ID OF THE USER THAT JUST LOGGED IN
const currentUser = JSON.parse(localStorage.getItem("userLogged"));
//IF THERE IS NO USER LOGGED REDIRECTED TO LOGIN.
if(!currentUser){
    window.location = "./login.html";
}

async function getUserInfo() {
    
}