export function render() {
    return `
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My academic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                            <tbody id="tableContent">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </main> 
   `
}

export function afterRender() {
    if(!(localStorage.getItem("userLogged"))){
        window.location = "#/login";
    } else{
        const tableContent = document.getElementById("tableContent");
        const container = document.getElementById("container");
        const URL_db = "http://localhost:3000/";
        async function getUsersNCourses(url) {
            try {
                const responseUsers = await fetch(url + "users");
                if (!responseUsers.ok) {
                    throw new Error("Couldn't fetch resource");
                }
                const dataUsers = await responseUsers.json();
                const responseCourses = await fetch(url + "courses");
                if (!responseCourses.ok) {
                    throw new Error("Couldn't fetch resource");
                }
                const dataCourses = await responseCourses.json();
                return [dataCourses, dataUsers];
            } catch (error) {
                console.error("Error when getting information:", error);
            }
        }
        async function renderUserInfo() {
            tableContent.innerHTML = '';
            const data = await getUsersNCourses(URL_db);
            const dataUsers = data[1];
            if (dataUsers) {
                const user = dataUsers.find(element => element.id === JSON.parse(localStorage.getItem("userLogged")));
                const userCourses = user.courses;
                let counter = 1;
                userCourses.forEach(element => {
                    tableContent.innerHTML += `
                    <td>${counter}</td>
                    <td>${element.name}</td>
                    <td>${element.code}</td>
                    <td>
                        <button type="button" class="btn btn-danger btn-delete" data-course="${element.name}">X</button>
                    </td>
                    `
                    counter++;
                });
            } else {
                container.innerHTML = `
                    <h1 class="mt-4 ms-4">You have no courses registered</h1>
                `
            }
            await deleteCourse();
        }
        async function deleteCourse() {
            const modalBtn = document.querySelectorAll(".btn-delete");
            modalBtn.forEach(element => {
                element.addEventListener("click", async (event) => {
                    event.preventDefault();
                    const confirmation = confirm("Are you sure you want to withdraw from this course?");
                    if (confirmation) {
                        const data = await getUsersNCourses(URL_db);
                        const dataUsers = data[1];
                        const user = dataUsers.find(element => element.id === JSON.parse(localStorage.getItem("userLogged")));
                        const newCourseList = user.courses.filter(element => element.name !== event.target.dataset.course);
                        try {
                            const response = await fetch(URL_db + "users/b7bc", {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    courses: newCourseList
                                })
                            });
                            if (!response.ok) {
                                throw new Error("Couldn't update resource");
                            }
                            const data = await response.json();
                        } catch (error) {
                            console.error("Error when updating information:", error);
                        }
                        renderUserInfo();
                    }

                });
            });
        }

        async function functionExecuter() {
            await getUsersNCourses(URL_db);
            await renderUserInfo();
        }
        functionExecuter();
    }
}