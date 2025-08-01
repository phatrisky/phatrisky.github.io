
function toggleMenu() {
    const sideBar: HTMLElement|any = document.getElementById('side-bar');
    const mainArea: HTMLElement|any = document.getElementById('main-area');
    sideBar.classList.toggle('active');
    mainArea.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sideBar: HTMLElement|any = document.getElementById('side-bar');
    const mainArea: HTMLElement|any = document.getElementById('main-area');
    const menuToggle: HTMLElement|any = document.querySelector('.menu-toggle');
    if (!sideBar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideBar.classList.remove('active');
        mainArea.classList.remove('active');
    }
});

const mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (event: {matches: boolean}) => {
    const imgHeaderLogo: HTMLImageElement|null = document.querySelector("img.header-logo");
    if (!imgHeaderLogo) return;
    if (event.matches) {
        imgHeaderLogo.src = "svg-logo/logo-light.svg"; // โลโก้สำหรับโหมดมืด
    } else {
        imgHeaderLogo.src = "svg-logo/logo-dark.svg"; // โลโก้สำหรับโหมดสว่าง
    }
});

// เริ่มต้นด้วยการตั้งค่าโลโก้ตามโหมดปัจจุบัน