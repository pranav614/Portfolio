
let mobileNavbar = document.querySelector(".navSubMobile");
let closeDiv = document.querySelector(".close");
let menu = document.querySelector(".menu");


const openBar = () => {
    mobileNavbar.style.display = "flex";
    menu.style.display = "none";
}

const closeFunc = () => {
    mobileNavbar.style.display = "none";
    menu.style.display = "block";
};


