/* Una persona quiere entrar a una discoteca. Solo puede si tiene más de 18 años.
Muestra un mensaje dependiendo si entra o no.*/
const age = prompt("How old are you?");
let messageContent = (age>=18) ? `You are ${age} years old, you can enter` : `You are ${age} you cannot enter`;

console.info(messageContent);