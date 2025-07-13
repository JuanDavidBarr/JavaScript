export function render(){
    return `
    
        <header>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Students</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Leave</a>
                </li>
            </ul>
        </header>
        <main>
            <section class="container">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">ID</th>
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