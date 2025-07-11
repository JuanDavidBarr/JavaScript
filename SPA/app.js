//DEFINE PAGE CONTENT FUNCTIONS
//EACH FUNCTION RETURNS THE CONTENT FOR A SPECIFIC PAGE
function getHomePage(){
    return `<h1>Welcome home</h1><p>This is our SPA home page.</p><h1>`
}

function getAboutPage(){
    return `<h1>Welcome home</h1><p>Learn about our company.</p><h1>`
}

function getContactPage(){
    return `<h1>Welcome home</h1><p>Get in touch with our team.</p><h1>`
}

//SET UP ROUTING TABLE
//THE ROUTES MAPS URLS HASHES TO THEIR RESPECTIVE FUNCTIONS
const routes = {
    '#/': getHomePage,
    '#/about': getAboutPage,
    '#/contact': getContactPage
}
//HANDLES URL CHANGES
//THE HANDLEROUTER FUNCTIONS UPDATES THE #APP DIV WHENEVER THE URL HASH CHANGES
function handleRoute() {
    const hash = window.location.hash || '#/'; // Default to home if no hash
    const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
    document.getElementById('app').innerHTML = content;
}

// Listen for navigation events
//WHEN THE HASH CHANGES, IT ACTIVATES HANDLEROUTE
window.addEventListener('hashchange', handleRoute);
//WHEN THE PAGE RELOADS, IT ACTIVATES HANDLEROUTE 
window.addEventListener('load', handleRoute);
