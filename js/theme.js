document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('#theme').addEventListener(
        'click', ()=> {
            document.querySelector('body').classList.toggle('body-dark');
            document.querySelector('.content').classList.toggle('content-dark');
            document.querySelector('.nav').classList.toggle('nav-dark');
        }
    )
});