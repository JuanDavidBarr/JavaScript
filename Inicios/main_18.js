/*18. Simula un menú en consola que se repite hasta que el usuario elija "salir". 
• Opciones: Ver perfil, Editar perfil, Cerrar sesión. 
• Cada opción debe mostrar un mensaje, y repetir hasta que seleccione salir.*/
function profile(){
    console.log("Welcome to your profile");
}
function editProfile(){
    console.log("Here you can edit your profile information");
}
function menu(){
    let flag = true;
    while(flag){
        let option = prompt("Welcome to our menu. These are the options:\n 1. My profile\n 2. Edit profile\n 3. Exit.\n Please select one of the options")
        switch (option) {
            case "1":
                profile();
                break;
            case "2":
                editProfile();
                break;
            case "3":
                console.log("Thanks for using our menu")
                flag = false;
                break;
            default:
                console.warn("Please, valid options only (1, 2 or  3)");
                break;
        }
    }
}

menu();