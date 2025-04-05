

let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contacts = document.getElementById('contacts');

let home = document.getElementById('home');

function showAbout() {
    about.style.display = "block";
    

    home.style.display = "none";
    projects.style.display = "none";
    contacts.style.display = "none";
}

function showProjects() {
    projects.style.display = "block";
    home.style.display = "none";
    about.style.display = "none";
    contacts.style.display = "none";
}
function showContact() {
    contacts.style.display = "block";
    home.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";
}
function showHome() {
    home.style.display = "block";
    about.style.display = "none";
    projects.style.display = "none";
    contacts.style.display = "none";
}


