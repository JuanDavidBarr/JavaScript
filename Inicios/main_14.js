/* 14. Simula el ingreso de 5 nombres de usuarios. Por cada usuario ingresado: 
• Verifica si el nombre tiene más de 3 caracteres. 
• Si no cumple, muestra un mensaje de error. 
• Al final, muestra cuántos usuarios válidos se registraron. */
function fiveValidUsers (){
    let users = [];
    let user;
    let maxUsers = 6;
    for (let counter = 1; counter < maxUsers; counter++) {
        user = prompt("Please, type a username. (Usernames must contain more than 3 caracters");
        if (user.length > 3){
            users.push(user);
        } else {
            alert("Username not valid, it must contain more than 3 caracters");
            console.error("Username not valid, it must contain more than 3 caracters");
        }
    }
    console.info(`${users.length} user(s) were succesfully registered`);
}

fiveValidUsers();