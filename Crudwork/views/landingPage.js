import { loadCss } from "../utils/loadCss.js";
export function render() {
    loadCss("Css/landingPage.css");
    
    return `
    <header class="container">
        <nav class="navbar  has-text-weight-bold has-text-link">
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
                    <a href="#" class="navbar-item has-text-weight-medium has-text-link">Login</a>
                    <a href="#" class="navbar-item has-text-weight-medium has-text-link">Register</a>
                    <a href="#" class="navbar-item has-text-weight-medium has-text-link">Profile</a>
                </div>
            </div>
        </nav>
    </header>
    <main class="columns-container is-clipped">
        <section class="hero is-link is-fullheight-with-navbar">
            <div class="hero-body columns">
                <div class="column is-half is-flex is-flex-direction-column logoCard">
                    <a class="is-align-self-center" href="#/loginCandidates"><img class="img p-3"
                            src="./assets/Images/candidateLogo.svg" alt="Company Logo"></a>
                    <h1 class="title has-text-centered mt-5">Candidates</h1></a>
                </div>
                <div class="column is-half is-flex is-flex-direction-column logoCard">
                    <a class="is-align-self-center" href="#/loginCompanies"><img class="img p-3"
                            src="./assets/Images/companyLogo.svg" alt="Company Logo"></a>
                    <h1 class="title has-text-centered mt-5">Company</h1>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="content has-text-centered has-text-danger is-size-5">
          <p>
            <strong class="has-text-danger">CrudWork</strong> by Juan David Barrera Patiño.
          </p>
        </div>
    </footer>
    `
}

export function afterRender() {
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
}