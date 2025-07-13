export function render (){
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
                            <a class="nav-link" href="#">My courses</a>
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
            <section class="container">
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ...
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    `
}