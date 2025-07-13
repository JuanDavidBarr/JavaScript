const routes = {
    '/' : ()  => import('./views/landingpage.js'),
    '/login' : () => import('./views/login.js'),
    '/register' : () => import('./views/register.js'),
    '/dashboard' : () => import('./views/dashboard.js'),
    '/dashboardStudents' : () => import('./views/dashboardStudents.js'),
    '/dashboardCourses' : () => import('./views/dashboardCourses.js'),
    '/myCourses' : () => import('./views/myCourses.js')
};

export async function renderRoute(hash, container) {
    const path = hash.slice(1) || '/';
    const load = routes[path];
    if(!load){
    container.innerHTML = `<h2>Not founded</h2>`
    return;    
    }
    const module = await load();
    const html = await module.render();
    container.innerHTML = html;
    if (typeof module.afterRender === 'function'){
        module.afterRender();
    }
}



