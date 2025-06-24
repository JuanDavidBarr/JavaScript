/*Pide que se ingresen contraseñas (simuladas en una lista) y: 
• Valida que cada una tenga al menos 8 caracteres y contenga un número. 
• Si no cumple, muestra que debe cambiarla. 
• Detén el ciclo si se encuentra una contraseña válida.*/
//Using test()
let passwords = ["juliano", "epito12", "carlos256", "arroz"];
function passwordValidator(array){
    //caracter in the string we are looking for
    let pattern = /\d/;
    for (const password of array) {
        let result = pattern.test(password);
        let passwordLength = password.length;
        console.log(passwordLength);
        if(passwordLength >= 8 && result){
            console.info(`The password ${password} is valid`);
            break;
        } else{
            console.warn(`The password ${password} does not match the requirements, you need to change it`);
        }
    }
}

passwordValidator(passwords);

