/*Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa
si aplica descuento.*/
const numberPurchases = prompt("How many purchases did you do?")
let messageContent = (numberPurchases > 3) ? `You did ${numberPurchases} purchases, you get a discount` : `You did ${numberPurchases} purchases, you get no discount`;
console.log(messageContent);