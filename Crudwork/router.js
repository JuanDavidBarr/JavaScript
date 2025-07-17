// const router = {
//     "/login" : () => import ('./views/login.js')
// }

// export async function renderRoute(hash, app) {
//     const path = hash.slice(1) || "/";
//     const load = router[path];

//     if(!load){
//         app.innerHTML = '<h2>Page not found</2>';
//         return;
//     }

//     const module = await load();
//     const html = module.render();
//     app.innerHTML = html;

//     if(module.afterRender){
//         module.afterRender();
//     }

// }