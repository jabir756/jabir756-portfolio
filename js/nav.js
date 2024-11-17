document.addEventListener('DOMContentLoaded', ()=> {

    let dropdown = false;
    document.querySelector('#menu-btn').addEventListener('click', ()=> {
        dropdown = !dropdown;
        if(dropdown) {
            document.querySelector('#menu-btn').innerHTML = '&#10005;';
            document.querySelector('#menu-btn').style.color = '#333333';
            document.querySelector('.content').style.display = 'flex';
        } else {
            document.querySelector('#menu-btn').innerHTML = '&#9776;';
            document.querySelector('#menu-btn').style.color = '#333333';
            document.querySelector('.content').style.display = 'none';
        }
    });
});