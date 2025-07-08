const contentInputName = document.querySelector(".input-name");
const contentInputAge = document.querySelector(".input-age");
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");
const showBtn = document.querySelector(".show-btn");
const messages = document.querySelectorAll(".result");
const table = document.querySelector(".table");
//Initializes interaction counter
if(!sessionStorage.getItem("interactionCounter")){
    sessionStorage.setItem("interacionCounter", 0);
}
//Stores input values in the local storage
saveBtn.addEventListener("click", ()=> {
    //Interaction counter
    interactions();
    const name = contentInputName.value;
    const age = contentInputAge.value;
    const empty = isEmpty(name, age);
    const noValid = isValid(age);
    //Remove messages (success, error, warning) if any
    messages.forEach(message => {
        message.classList.add("is-hidden");
    })
    if (empty || !noValid) {
        messages.forEach(message => {
            if(message.classList.contains("result-error")){
                message.classList.remove("is-hidden");
            }
        })
        return;
    }
    const users = [{}];
    //Returns a number from 1000 to 9999
    let idGenerator = () =>{
        return Math.floor(Math.random() * 9000) + 1000;
    }
    let id = idGenerator();
    users[id] = {
        "name": name,
        "age" : age
    }
    //Creates a pair key-value in the local storage
    localStorage.setItem(JSON.stringify(id),JSON.stringify(users[id]));
    messages.forEach(message => {
        if(message.classList.contains("result-success")){
            message.classList.remove("is-hidden");
        }
    })
})
//Clears data from local storage
clearBtn.addEventListener("click", ()=> {
    //Interaction counter
    interactions();
    //Removes messages (success, error, warning) if any
    messages.forEach(message => {
        message.classList.add("is-hidden");
    })
    localStorage.clear();
    messages.forEach(message => {
        if(message.classList.contains("result-warning")){
            message.classList.remove("is-hidden");
        }
    })

})
//Shows information in the html
showBtn.addEventListener("click", ()=>{
    //Interaction counter
    interactions();
    //Removes messages (success, error, warning) if any
    messages.forEach(message => {
        message.classList.add("is-hidden");
    })
    //Verifies there is information or no in the localstorage
    if (localStorage.length === 0){
        messages.forEach(message =>{
            if(message.classList.contains("result-information")){
                message.classList.remove("is-hidden");
            }
            return;
        })
    } else {
        const users = [];
        for (let index = 0; index < localStorage.length; index++) {
            users.push(JSON.parse(localStorage.getItem(localStorage.key(index))));      
        }
        const usersValues = Object.values(users);
        usersValues.forEach(element => {
            const newRow = document.createElement("tr");
            const newCell1 = document.createElement("td");
            const newCell2 = document.createElement("td");
            table.appendChild(newRow);
            newCell1.innerText = element.name;
            newCell2.innerText = element.age;
            newRow.appendChild(newCell1);
            newRow.appendChild(newCell2);      
        });
    }
    
})
//Makes sure users imput has something
function isEmpty(name, age){
    if(!name || !age){
        return true;
    } else {
        return false;
    }
}
//Validates name and user age
function isValid(age){
    if(isNaN(age)){
        return false;
    } else { 
        return true;
    }
}
//Interactions
function interactions(){
    let intCounter = JSON.parse(sessionStorage.getItem("interactionCounter"));
    intCounter++;
    sessionStorage.setItem("interactionCounter",intCounter);
    console.log(`Number of interactions so far: ${intCounter}`);
}



