export function render() {
    return `

    <main class="hero is-fullheight is-clipped">
        <section class="columns hero-body is-centered">
            <form class="column is-two-thirds-tablet is-one-third-desktop is-one-quarter-fullhd">
                <div class="field">
                    <label class="label" for="user">Username or Email</label>
                    <div class="control">
                        <input class="input" type="text" id="user" name="user">
                    </div>
                    <p class="help is-danger is-hidden usernameIncorrect" data-hidden>User not found</p>
                    <p class="help is-danger is-hidden emailIncorrect" data-hidden>Email not found</p>
                    <p class="help is-danger is-hidden user" data-hidden>All fields must be filled</p>
                </div>
                <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                        <input class="input" type="password" id="password" name="password">
                    </div>
                    <p class="help is-danger is-hidden passwordIncorrect" data-hidden>Password does not match</p>
                    <p class="help is-danger is-hidden password" data-hidden>All fields must be filled</p>
                </div>
                <div class="control">
                    <button class="button is-danger" id="loginBtn">Login</button>
                    <button class="button is-link" id="createAccBtn">Create</button>
                </div>
            </form>
        </section>
    </main>
    
    `
}

export function afterRender() {
    const URL_DB = "http://localhost:3000/";
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        const errorMessage = document.querySelectorAll("[data-hidden]");
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        const loginInput = document.querySelectorAll(".input");
        let isEmpty = false;
        let noMatch = false;
        //DELETING INPUT ERROR MESSAGES IF ANY
        errorMessage.forEach(message => {
            if (message.dataset.hidden === "false") {
                message.classList.add("is-hidden");
                message.dataset.hidden = "true";
            }
        })
        //VALIDATES EMPTY INPUTS
        loginInput.forEach(input => {
            if (input.value.length === 0) {
                const emptyMessage = document.querySelector(`.${input.name}`);
                emptyMessage.classList.remove("is-hidden");
                emptyMessage.dataset.hidden = "false";
                isEmpty = true;
            }
        })
        if (isEmpty) {
            return;
        }
        //GETTING USER DATA FROM DATABASE
        try {
            const responseUser = await fetch(URL_DB + `companies?name=${user}`);
            const responseEmail = await fetch(URL_DB + `companies?email=${user}`);
            const username = await responseUser.json();
            const email = await responseEmail.json(); 
            const finalInput = username[0] || email[0];

            //VALIDATING PASSWORD
            if (finalInput) {
                if (finalInput.password === password) {
                    localStorage.setItem("userLogged", JSON.stringify(finalInput));
                    window.location = "#/"
                } else {
                    const incorrectPassword = document.querySelector(".passwordIncorrect");
                    incorrectPassword.classList.remove("is-hidden");
                    incorrectPassword.dataset.hidden = "false";
                    noMatch = true;
                }
            } else{
                const incorrectUsername = document.querySelector(".usernameIncorrect");
                incorrectUsername.classList.remove("is-hidden");
                incorrectUsername.dataset.hidden = "false";
                noMatch = true
            }

        } catch (error) {
            console.error("Error when finding name:", error);
        }
        if (noMatch) {
            return;
        }
    })
    const createAccBtn = document.getElementById("createAccBtn");
    createAccBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        window.location = '#/registerCompanies';
    })
}