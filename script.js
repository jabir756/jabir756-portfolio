//Run script after dom loaded
document.addEventListener("DOMContentLoaded", ()=>{
    //Mail to for sending me a mail 
    document.getElementById("mail-to").addEventListener("click", () => {
        window.location.href = "mailto:jabirkagone6@gmail.com";
    });

    //Menu button
    document.querySelector("header span").addEventListener("click", () => {
        document.querySelector("header nav").classList.toggle("nav-show")
    });

    //open git on click
    document.getElementById("git-btn").addEventListener("click", () => {
        window.open("https://github.com/jabir756");
    });
    
})