document.addEventListener('DOMContentLoaded', function() {
    const navbarShowBtn = document.querySelector('.navbar-show-btn');
    const navbarHideBtn = document.querySelector('.navbar-hide-btn');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarShowBtn.addEventListener('click', function() {
        navbarCollapse.classList.add('show');
    });

    navbarHideBtn.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
    });
});