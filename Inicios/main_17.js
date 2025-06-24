/*Permite hasta 3 intentos para iniciar sesión. 
• Si el usuario ingresa mal el nombre o contraseña, se le notifica cuántos 
intentos le quedan. 
• Si acierta, muestra “Bienvenido”. 
• Si falla 3 veces, muestra “Cuenta bloqueada”.*/
let userData = {
    "userName" : "Pedro",
    "password" : "Pedro123"   
}
function logIn(userDb){
    let attempts = 0;
    let allowedAttempts = 3;
    let accountBlocked = false;
    do{
        let userNamePrompt = prompt("Type your username");
        let passwordPrompt = prompt("Type your password");
        if(userNamePrompt == userDb.userName){
            if(passwordPrompt == userDb.password){
                console.info(`Welcome back ${userNamePrompt}`);
                attempts = 3;
            } else {
                console.warn("The password does not match");
                attempts++;
                console.warn(`You have ${allowedAttempts - attempts} left`)
                if (attempts == 3){
                    accountBlocked = true;
                }
            }
        } else {
            console.warn("The username does not match");
            attempts++;
            console.warn(`You have ${allowedAttempts - attempts} left`)
            if (attempts == 3){
                accountBlocked = true;
            }
        }
        if(accountBlocked){
            console.warn("Your account has been blocked")
        }
    } 
    while(attempts < 3);
    
}

logIn(userData);
