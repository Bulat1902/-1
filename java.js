/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textShadow = '0 0 10px #ff007f';
        });
        link.addEventListener('mouseout', () => {
            link.style.textShadow = 'none';
        });
    });
});
