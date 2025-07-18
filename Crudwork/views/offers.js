export function render(){
    return `
        <header class="container">
            <nav class="navbar has-text-weight-bold has-text-link">
                <div class="navbar-brand">
                    <h1 class="navbar-item is-italic has-text-weight-bold has-text-danger is-size-3">CrudWork</h1>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <a href="#" class="navbar-item has-text-weight-medium has-text-link">Home</a>
                        <a href="#" class="navbar-item has-text-weight-medium has-text-link">Logout</a>
                        <a href="#" class="navbar-item has-text-weight-medium has-text-link">Profile</a>
                    </div>
                </div>
            </nav>
        </header>
        <main class="has-background-link">
            <section class="container mt-6">
                <div class="columns is-multiline mb-4">
                    <div class="column" id="cardsContainer">

                    </div>
                </div>
            </section>
        </main>
    `
}

export function afterRender(){
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        console.log($navbarBurgers);

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    });
    const currentUser = JSON.parse(localStorage.getItem("userLogged"));
    const URL_DB = "http://localhost:3000/";
    const cardsContainer = document.getElementById("cardsContainer");
    // Gets offers 
    async function applyOffers() {
        //gets offers
        try {
            const response = await fetch(URL_DB + "offers");
            const offers = await response.json();
            //inserts offerts into the HTML
            offers.forEach(offer => {
                cardsContainer.innerHTML += `
                    <div class="card">
                        <header class="card-header">
                        <p id="idContainer" class="card-header-title is-size-4" data-id = "${offer.id}">${offer.title}</p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p><strong>Description:</strong> ${offer.description}</p>
                                <p><strong>Salary:</strong> ${offer.salary}</p>
                                <p><strong>Modality:</strong> ${offer.modality}</p>
                                <p><strong>Company:</strong> ${offer.company}</p>
                            </div>
                        </div>
                        <footer class="card-footer">
                        <a id="applyBtn" class="card-footer-item">Apply</a>
                        </footer>
                    </div>
                `
            });
            //applies to offers
            const applyBtn = document.getElementById("applyBtn");
            applyBtn.addEventListener("click", async (event) => {
                event.preventDefault();
                const idContainer = document.getElementById("idContainer");
                const offerId = idContainer.dataset.id;
                const now = new Date();
                const applicationDate = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}` 
                const newApplication = {
                    "user": currentUser.id,
                    "offer": offerId,
                    "date": applicationDate,
                    "status": "pending"
                }
                try {
                    const response = await fetch(URL_DB + "applications", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newApplication)
                    })
                } catch (error) {

                }
            })
        } catch (error) {
            console.error("Error when getting offers:", error);
        }
    }
    applyOffers();
}