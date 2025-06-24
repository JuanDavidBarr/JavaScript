/* Evalúa si un usuario puede acceder a una oferta:
• Tiene que haber iniciado sesión.
• No debe tener reportes activos.
• Su edad debe ser mayor a 21 años o tener membresía premium. */
let registerUser;
let registerPass;
let activeReports;
let age;
let isPremium;
function register(){ 
    let registerUncomplete = true;
    while(registerUncomplete){ 
        registerUser = prompt("Type a username");
        registerPass = prompt("Type a password");
        if (registerUser == "" || registerPass == ""){
            console.info("There is no information in one (or both) of the fields. The account was not created");
        } else{
            console.info("Your account has been succesfully created")
            registerUncomplete = false;
        }
    }
    age = prompt("How old are you?");
    if (isNaN(age)){
        console.error("Please, numbers only");
        alert("Please, numbers only!");
    } else{
        age = parseInt(age);
    }
    activeReports = prompt("Do you have any reports active? (yes/no)")
    activeReports = activeReports.toLocaleLowerCase();
    if (activeReports != "yes" && activeReports != "no"){
        console.error("Please, 'yes' or 'no' answers only!")
    }
    isPremium = prompt("Would you like to upgrade your account from basic to premium? (yes/no)");
    isPremium = isPremium.toLocaleLowerCase();
    if (isPremium != "yes" && isPremium != "no"){
        console.error("Please, 'yes' or 'no' answers only!") 
    }
}
function logIn(){
    let logUncomplete = true;
    while(logUncomplete){ 
        let logIngUser = prompt("Type your username");
        let logIngPass = prompt("Type your password");
        if (registerUser == logIngUser && registerPass == logIngPass){
            console.info(`Welcome back ${registerUser}`)
            logUncomplete = false;
        } else {
            console.error("The password or the username is not correct");
        }
    }
    if (activeReports == "no" && (age > 21 || isPremium == "yes")){
        console.info("Dear user, you can access to a very nice offer")
    } else {
        console.info("There is no news in your account")
    }
}

register();
logIn();


