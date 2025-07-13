export function render () {
    return `
        <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">My academic</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#/myCourses">My courses</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#/login">Login</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#/register">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
        <main>
            <div id="welcomeMessage" class="mt-4 ms-4">
                    
            </div>
        </main>
    `
}

export function afterRender(){
    if(!(localStorage.getItem("userLogged"))){
        window.location = "#/login";
    } else{
        const URL_db = "http://localhost:3000/";
        const container = document.getElementById("welcomeMessage");
        async function getUsers(url){
        try{
            const response = await fetch(url+"users");
            if(!response.ok){
                throw new Error ("Couldn't fetch resource")
            }
            const data = await response.json();
            return data;
        }catch(error){
            console.error ("Error when getting information:". error);
        }  
        }
        async function renderUserInfo (){
            const data = await getUsers(URL_db);
            const user = data.find(element => element.id === JSON.parse(localStorage.getItem("userLogged")));
            const userName = user.username;
            container.innerHTML = `<h1>Welcome back, ${userName}</h1>`
        }
        async function functionExecuter() {
            await getUsers(URL_db);
            await renderUserInfo();
        }
        functionExecuter();
    }
}