export function render() {
    return `
        <header class="container">
            <nav class="navbar has-shadow has-text-weight-bold has-text-link">
                <div class="navbar-brand">
                    <h1 class="navbar-item is-italic has-text-weight-bold has-text-danger">CrudWork</h1>
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
    `
}

export function afterRender() {
    if(!localStorage.getItem("userLogged")){
        window.location = "#/login"
    }
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