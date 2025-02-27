document.addEventListener('DOMContentLoaded', function () {
    console.log('Boilerplate Loaded');
 
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('.fas');
 
    // Check for user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       document.body.classList.add('dark-mode');
       document.body.classList.remove('light-mode');
       icon.classList.remove('fa-moon');
       icon.classList.add('fa-sun');
    }
 
    toggleButton.addEventListener('click', function () {
       document.body.classList.toggle('dark-mode');
       document.body.classList.toggle('light-mode');
 
       if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
       } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
       }
    });
 
    // Active nav handling
    const currentPage = document.body.id; // Set a unique id on each page's body tag
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
 
    navItems.forEach(item => {
       item.classList.remove('active');
       item.querySelector('.nav-link .sr-only')?.remove();
    });
 
    navLinks.forEach(link => {
       if (link.getAttribute('data-page') === currentPage) {
          link.parentElement.classList.add('active');
          const srOnlySpan = document.createElement('span');
          srOnlySpan.classList.add('sr-only');
          srOnlySpan.textContent = '(current)';
          link.appendChild(srOnlySpan);
       }
    });
 
 });