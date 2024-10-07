//Run script after dom loaded
"use strict";
document.addEventListener("DOMContentLoaded", ()=>{

    //Menu button
    document.getElementById("menu").addEventListener("click", () => {
        document.getElementById("nav-container").classList.toggle("nav-container-show");
    });

     //Mail to for sending me a mail in profil 
    document.getElementById("profil-mail-to").addEventListener("click", () => {
        window.location.href = "mailto:jabirkagone6@gmail.com";
    });

    //open git on click in profil
    document.getElementById("profil-git-btn").addEventListener("click", () => {
        window.open("https://github.com/jabir756");
    });
})