/*Crea un sistema de acceso a una plataforma que:
• Verifique si el usuario ingresó usuario y contraseña válidos.
• Bloquee el acceso si hay más de 3 intentos fallidos.
• Permita el acceso si es administrador, aunque falle una vez.*/
function menu (){
    let flag = true;
    userData = null;
    console.info(`Welcome to our platform.\nThese are the options:\n1. Register\n2. Log in`);
    do {
        let menuOPtion = prompt("Please, indicate the number (1, 2 or 3) of the action you want do");
        switch (menuOPtion) {
            case "1":
                userData = register();
                break;
            case "2":
                logIn(userData);
                break;
            case "3":
                console.info("Thanks for using our app.")
                flag = false;
                break;
            default:
                console.error("Please, indicate a valid option");
                alert("Please, indicate a valid option")
                break;
        }
    } while (flag);
}

function register (){
    let user = {};
    let flag = true;
    do{ 
        user.userName = prompt("Type a new username");
        user.password = prompt("Type a new password");
        if (user.userName == "" || user.password == ""){
            console.error("There is no information in one (or both) field(s). The account was not created");
        } else {
            console.info("Your account has been succesfully created")
            flag = false;
        }
    }
    while(flag);
    flag = true;
    return user;   
}

function logIn (user){
    let flag = true;
    let logInUserName;
    let logInPassword;
    let isAdmin;
    console.log(user);
    do{
        isAdmin = prompt("Are you an administrator? choose 1 for 'yes', or 2 for 'no'")
        switch (isAdmin) {
            case "1":
                console.info("You are an admin")
                isAdmin = true;
                flag = false;
                break;
            case "2":
                console.info("You are not an admin")
                isAdmin = false;
                flag = false;
                break; 
            default:
                console.error("Please, indicate a valid option");
                alert("Please, indicate a valid option")
                break;
        }
    } while (flag);
    switch (isAdmin) {
        case false:
            for (let counter = 0; counter < 3; counter++) {
                logInUserName = prompt("Type your username");
                logInPassword = prompt("Type your password");
                if (logInUserName == user.userName && logInPassword == user.password){
                    console.info(`Welcome back ${logInUserName}`);
                    counter = 3;
                } else {
                    console.error(`Either the password or the username does not match, you have ${2 - counter} attempt(s) left`);
                    if (counter == 2){
                        console.info("You will be redirected to the main menu");
                    }                    
                }  
            }
            break;
        case true:
            for (let counter = 0; counter < 2; counter++) {
                logInUserName = prompt("Type your username");
                logInPassword = prompt("Type your password");
                if (logInUserName == user.userName && logInPassword == user.password){
                    console.info(`Welcome back ${logInUserName}`);
                    counter = 1;
                } else {
                    console.error(`Either the password or the username does not match, you have ${1 - counter} attempt left`);
                }  
            }
            break;
        default:
            break;
    }
}
menu();