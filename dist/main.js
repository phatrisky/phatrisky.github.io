"use strict";
function toggleMenu() {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    sideBar.classList.toggle('active');
    mainArea.classList.toggle('active');
}
document.addEventListener('click', function (event) {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sideBar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideBar.classList.remove('active');
        mainArea.classList.remove('active');
    }
});
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (event) => {
    const imgHeaderLogo = document.querySelector("img.header-logo");
    if (!imgHeaderLogo)
        return;
    if (event.matches) {
        imgHeaderLogo.src = "svg-logo/logo-light.svg"; // โลโก้สำหรับโหมดมืด
    }
    else {
        imgHeaderLogo.src = "svg-logo/logo-dark.svg"; // โลโก้สำหรับโหมดสว่าง
    }
});
// เริ่มต้นด้วยการตั้งค่าโลโก้ตามโหมดปัจจุบัน
//# sourceMappingURL=main.js.map