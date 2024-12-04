document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menuContent = document.querySelector('.nav .content');

    menuBtn.addEventListener('click', () => {
        menuContent.classList.toggle('active');
        
        // Toggle menu button text
        if (menuContent.classList.contains('active')) {
            menuBtn.innerHTML = '&times;';
        } else {
            menuBtn.innerHTML = '&#8801;';
        }
    });

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('.nav .content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuContent.classList.remove('active');
            menuBtn.innerHTML = '&#8801;';
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.setAttribute('loading', 'lazy');
    });
});