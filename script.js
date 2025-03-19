function toggleMenu() {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    sideBar.classList.toggle('active');
    mainArea.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sideBar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideBar.classList.remove('active');
        mainArea.classList.remove('active');
    }
});