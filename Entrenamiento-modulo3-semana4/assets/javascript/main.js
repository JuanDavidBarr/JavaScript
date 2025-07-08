const contentInputName = document.querySelector(".input-name");
const contentInputAge = document.querySelector(".input-age");
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");
const showBtn = document.querySelector(".show-btn");
const messages = document.querySelectorAll(".result");
//Stores input values in the local storage
saveBtn.addEventListener("click", ()=> {
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
    //Remove messages (success, error, warning) if any
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
    const users = {};
    for (let index = 0; index < localStorage.length; index++) {
        console.log(localStorage.getItem(localStorage.key(index)));      
    }
    // const tableSection = document.querySelector(".table-section");
    // tableSection.innerHTML = `<div class="container">
    //         <div class="columns is-centered">
    //             <div class="column is-two-fifths">
    //                 <table class="table">
    //                     <thead>
    //                         <tr>
    //                             <th></th>
    //                             <th>Name</th>
    //                             <th>Age</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <th>[id]</th>
    //                             <td>[nameValue]</td>
    //                             <td>[ageValue]</td>
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </div>`
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



