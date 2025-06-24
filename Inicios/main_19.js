/*19. Simula un carrito con productos y precios. 
• El usuario puede “agregar producto” o “finalizar compra”. 
• Cada vez que agrega, suma al total. 
• Al finalizar, muestra el valor total del carrito.*/
let products = {
    "Cellphone" : 2000000,
    "Television" : 1500000,
    "Laptop" : 3500000,
    "Desktop" : 4500000,
    "Headphones" : 750000
}

function selectProducts(products){
    let counter = 1;
    let productSelected;
    let productAndUnits = {};
    let amount;
    console.log("Welcome to our menu. This are the products in our inventory:");
    for (const product in products) {
        console.log(`${counter}. ${product} : ${products[product]}`);
        ++counter;
    }
    let flag = true;
    while(flag){
        let isNotNumber = true;
        let option = prompt("Type the product you would like to add to the cart:\n 1. Cellphone\n 2. Television\n 3. Laptop\n 4. Desktop\n 5. Headphones\n 6. I'm done buying.");   
        switch (option) {
            case "1":
                productSelected = "Cellphone";
                break
            case "2":
                productSelected = "Television";
                break;
            case "3":
                productSelected = "Laptop";
                break;
            case "4":
                productSelected = "Desktop";
                break;
            case "5":
                productSelected = "Headphones";
                break;
            case "6":
                console.info("See you soon!");
                flag = false;
                isNotNumber = false;
                break;   
            default:
                console.error("Please, valid options only! ")
                break;
        }
        while (isNotNumber){
            amount = prompt(`How many units of ${productSelected}?`);
            if (isNaN(amount)) {
                console.warn("Please, numbers only!");
            } else {
                isNotNumber = false;
            }
        }
        productAndUnits[productSelected] = amount;
        console.log(productAndUnits);
    }
    return productAndUnits;
}
function total(productAndUnits,products){
let total = 0;
let totalPurchase = []
if (productAndUnits == null){
    console.info("There is no products in the cart.");
    return;
} else {
    for (const product in productAndUnits) {
        for(const reference in products){
            if (product == reference){
                let productPrice = products[reference];
                let units = productAndUnits[product];
                let subTotal = productPrice * units;
                totalPurchase.push(subTotal);
            }
        }
    }
}
totalPurchase.forEach(element => {
    total += element;
});
console.log(`The total of your purchase is ${total} COP`)
}
let products_units = selectProducts(products);
total(products_units, products);

