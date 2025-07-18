export function render(){
    return `
        <main class="hero is-fullheight is-clipped">
            <section class="columns hero-body is-centered">
                <form class="column is-two-thirds-tablet is-one-third-desktop is-one-quarter-fullhd">
                    <div class="field">
                        <label class="label" for="username">Username</label>
                        <div class="control">
                            <input class="input" type="text" id="username" name="username">
                        </div>
                        <p class="help is-danger is-hidden usernameUnavailable" data-hidden>There is already an account with that username</p>
                        <p class="help is-danger is-hidden username" data-hidden>All fields must filled</p>
                    </div>
                    <div class="field">
                        <label class="label" for="email">Email</label>
                        <div class="control">
                            <input class="input" type="email" id="email" name="email">
                        </div>
                        <p class="help is-danger is-hidden emailUnavailable" data-hidden>There is already an account with that email</p>
                        <p class="help is-danger is-hidden email" data-hidden>All fields must be filled</p>
                    </div>
                    <div class="field">
                        <label class="label" for="password">Password</label>
                        <div class="control">
                            <input class="input" type="password" id="password" name="password">
                        </div>
                        <p class="help is-danger is-hidden password" data-hidden>All fields must be filled</p>
                    </div>
                    <div class="field">
                        <label class="label" for="passwordConfirm">Confirm Password</label>
                        <div class="control">
                            <input class="input" type="password" id="passwordConfirm" name="passwordConfirm">
                        </div>
                        <p class="help is-danger is-hidden passwordConfirm" data-hidden>All fields must be filled</p>
                        <p class="help is-danger is-hidden passwordNoMatch" data-hidden>Passwords don't match</p>
                    </div>
                    <div class="control">
                        <button class="button is-primary" id="registerBtn">Create</button>
                    </div>
                </form>
            </section>
        </main>
    `
}

export function afterRender(){
    const URL_DB = "http://localhost:3000/";
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        //REMOVE ERROR MESSAGES IF ANY
        const errorMessages = document.querySelectorAll("[data-hidden]");
        errorMessages.forEach(message => {
            if(message.dataset.hidden === "false"){
                message.classList.add("is-hidden");
                message.dataset.hidden = "true"
            }
        });
        //VALIDATES EMPTY INPUT
        const registerInput = document.querySelectorAll(".input");
        registerInput.forEach(input => {
            if(input.value.length === 0){
                const emptyMessage = document.querySelector(`.${input.name}`);
                emptyMessage.classList.remove("is-hidden");
                emptyMessage.dataset.hidden = "false";
            }
        });
        //VALIDATES PASSWORDS MATCH
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("passwordConfirm").value;
        if(!(password === passwordConfirm)){
            const noMatchMessage = document.querySelector(".passwordNoMatch");
            noMatchMessage.classList.remove("is-hidden");
            noMatchMessage.dataset.hidden = "false";
            return;
        }
        //GETS INFORMATION FROM DB
        try {
            const responseUsername = await fetch (URL_DB+`companies/?name=${username}`);
            const responseEmail = await fetch (URL_DB+`companies?email=${email}`);
            const dataUsername = await responseUsername.json();
            const dataEmail = await responseEmail.json();
            //VALIDATES USER AND EMAIL ARE AVAILABLE
            if(!(dataUsername[0] || dataEmail[0])){
                const newUser = {
                    "username" : username,
                    "email" : email,
                    "password" : password
                }
                try {
                    const responseNewUser = await fetch (URL_DB+"companies", {
                        method : "POST",
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify(newUser)
                    })
                    const dataNewUser = await responseNewUser.json();
                    console.log("New user has been created:", dataNewUser);
                    localStorage.setItem("userLogged", JSON.stringify(newUser));
                    window.location = "#/"
                } catch (error) {
                    console.error("Error when creating user:", error);
                }
            } else if(dataUsername[0]) {
                const usernameUnavailable = document.querySelector(".usernameUnavailable");
                usernameUnavailable.classList.remove("is-hidden");
                usernameUnavailable.dataset.hidden = "false";
            } else if(dataEmail[0]){
                const emailUnavailable = document.querySelector(".emailUnavailable");
                emailUnavailable.classList.remove("is-hidden");
                emailUnavailable.dataset.hidden = "false";
            }
        } catch (error) {
            console.error("Error when getting information:", error); 
        }
    })
}