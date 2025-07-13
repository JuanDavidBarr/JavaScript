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
        <div class="mt-4 ms-4">
            <h1>Welcome back, (student)</h1>
        </div>
    </main>
    `
}