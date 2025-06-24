/* En una aplicación bancaria:
Si la cuenta tiene menos de $10.000, muestra “Saldo insuficiente”.
Si tiene entre $10.000 y $1.000.000, muestra “Saldo moderado”.
Si tiene más de $1.000.000 o tiene tarjeta premium, muestra “Cliente preferencial”.*/

let totalAccount = prompt("How much money are there in you bank account?");
if (isNaN(totalAccount)){
    console.error("Please, numbers only!");
    alert("Please, numbers only!");
} else {
    totalAccount = parseInt(totalAccount);
}
let hasPremiumCard = prompt("Do you have a premium card? (yes or no)");
hasPremiumCard = hasPremiumCard.toLocaleLowerCase();
if (hasPremiumCard != "yes" && hasPremiumCard != "no"){
    console.warn("Yes or No answers only!");
    alert("Yes or No answers only!");
}


if (totalAccount < 10000){
    console.warn("Balance is not enough");
    alert("Balance is not enough");
} else if (10000 <= totalAccount <= 1000000){
    console.warn("Balance is average");
    alert("Balance is average");
} else if (totalAccount > 1000000 || hasPremiumCard == "yes"){
    console.warn("You are a premium client");
    alert("You are a premium client");
} else {
    console.warn("The entry is not valid");
    alert("The entry is not valid");
}
