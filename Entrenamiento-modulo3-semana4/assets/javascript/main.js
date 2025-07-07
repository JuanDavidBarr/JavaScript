const contentInputName = document.querySelector(".input-name");
const contentInputAge = document.querySelector(".input-age");
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");
//Store input values in the local storage
saveBtn.addEventListener("click", ()=> {
    const name = contentInputName.value;
    const age = contentInputAge.value;
    const empty = isEmpty(name, age);
    if (empty) {
        const messages = document.querySelectorAll(".message");
        messages.forEach(message => {
            message.classList.add("is-hidden");
        })
    }
    const users = [{}];
    //returns a number from 1000 to 9999
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
    
})
//Clear data from local storage
clearBtn.addEventListener("click", ()=> {
    localStorage.clear();
})

function isEmpty(name, age){
    if(!name || !age){
        return true;
    } else {
        return false;
    }

}

// clearBtn.addEventListener("click", () => {
//     const messages = document.querySelectorAll(".message");
//     messages.forEach(message => {
//         message.classList.add("is-hidden");
//     });
// })



