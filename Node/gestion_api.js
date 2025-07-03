//Request information stored in the server
async function getProducts() {
    //Catch any error when waiting for request's response
    try{
        //Wait for the promise to be fullfilled 
        const response = await fetch("http://localhost:3000/productos");
        //Custom error when response result is different to ok (e.g: 400, 401, 500)
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        //Turn data into JavaScript format, in this case an array
        const data = await response.json();
        console.log("Avaible products:", data);
    }
    catch(error){
        console.log("Error when getting products:", error);
    }
}
//Request to add a new product in the server's db
async function addProduct() {
    //Product to be added
    const newProduct = {
        id: 4, nombre: "Headset", precio: 200
    }
    const isValid = productValidationAdding(newProduct);
    if(isValid){
        try{
        const response = await fetch("http://localhost:3000/productos", {
            //Options that specify how the request is structured
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        })
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log("Product added:", data)
    }
        catch(error){
            console.log("Error when adding products:", error);
        }
    }
    else{
        return;
    }
}
//Request to update one product information
async function updateProduct() {
    //Product to be updated
    const updatedProduct = {
        nombre: "Laptop", precio: 1400
    }
    const isValid = productValidationUpdating(updatedProduct);
    if(isValid){
        try{
        const response = await fetch("http://localhost:3000/productos/1", {
            //Options that specify how the request is structured
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProduct)
        })
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log("Product updated:", data)
    }
        catch(error){
            console.log("Error when updating products:", error);
        }
    } else {
        return;
    }
}
//Request to delet a product
async function deleteProduct() {
    try{
        const response = await fetch("http://localhost:3000/productos/3", {
            //Options that specify how the request is structured
            method: "DELETE",
        })
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log("Product deleted:", data)
    }
    catch(error){
        console.log("Error when deleting products:", error);
    }
}
//Control the fetch flow, so we can specify an execution order
async function executionFlow() {
    try{
        await getProducts();
        await addProduct();
        await updateProduct();
        await deleteProduct();
    }
    catch (error){
        console.log("Error in the execution flow:", error)
    }
    
}
//Product information validation when adding
function productValidationAdding(product){
    if(!product.nombre || typeof (product.precio) !== "number" || typeof (product.id) !== "number"){
        console.error("Invalid product data");
        return false;
    } else {
        return true;
    }  
}
function productValidationUpdating(product){
    if(!product.nombre || typeof (product.precio) !== "number"){
        console.error("Invalid product data");
        return false;
    } else{
        return true;
    }    
}
executionFlow();


