'use strict'; 



document.addEventListener('DOMContentLoaded', (event) => {
    let menu = document.querySelector(".strila");
    let submenu = document.querySelector("#hedder");

    menu.addEventListener('click', () => {
        if (submenu.style.display != "flex") {
            submenu.style.display = "flex";

        } else {
            submenu.style.display = "none";
        }

    })

});