function toggleMenu() {
    const sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sideBar = document.getElementById('side-bar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sideBar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideBar.classList.remove('active');
    }
});