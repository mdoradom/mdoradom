document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn');
    const icon = document.querySelector('.btn__icon');
  
    // Load theme preference from localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.add('fa-sun');
    }
  
    btn.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      icon.classList.add('animated');
  
      // Store theme preference in localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
  
      setTimeout(function() {
        icon.classList.remove('animated');
      }, 500);
    });
  });