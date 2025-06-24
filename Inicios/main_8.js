/*Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de
Colombia. Evalúa si una persona puede participar*/
let age = prompt("How old are you?");
if (isNaN(age)){
    console.error("Please, numbers only");
    alert("Please, numbers only!");
} else{
    age = parseInt(age);
}
let residence = prompt("Where is your place of residence?");
residence = residence.toLocaleLowerCase();
if (residence == "colombia" && 15 <= age <= 35){
    console.log("You can participate in the tournament")
} else {
    console.log("I'm sorry, you cannot participate in the tournament")
}
