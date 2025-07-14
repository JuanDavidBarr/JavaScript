async function getUsers() {
    try {
        const response = await fetch("http://localhost:3000/Users");
        if (!response.ok) {
            throw new Error("Couldn't catch resource");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error when getting information:", error);
    }
}
async function renderTable() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';
    const users = await getUsers();
    let counter = 1;
    users.forEach(element => {
        tableBody.innerHTML += `
            <td>${counter}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
            <td>
                <div class="btn-group gap-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">X</button>
                </div>
            </td>
        `
        counter++;
    });
}
async function addUsers(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btnForm = document.getElementById("btnForm")
    btnForm.addEventListener("click", async (event)=>{
        event.preventDefault();
        const newUser = {
            "name": name.value,
            "email" : email.value,
            "password" : password.value
        }
        try{
            const response = await fetch("http://localhost:3000/Users", {
                method : "POST",
                headers : {
                    "Content-Type" : "application-json"
                },
                body : JSON.stringify(newUser)
            })
            if(!response.ok){
                throw new Error("Couldn't post resource");
            }
            const data = await response.json();
            console.log("User added:", data);
        }
        catch(error){
            console.error("Error when adding user:", error); 
        }
        await renderTable();
    })

    
}
async function functionExecuter() {
    await getUsers();
    await renderTable();
    await addUsers();
}
functionExecuter();