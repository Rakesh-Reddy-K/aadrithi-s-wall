const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// JavaScript for dark/light mode toggle
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');  // Toggle dark theme class on body
  
  // Change the icon based on theme
  if (body.classList.contains('dark-theme')) {
    toggleButton.innerHTML = '<i class="bx bx-sun"></i>';  // Sun icon for light mode
  } else {
    toggleButton.innerHTML = '<i class="bx bx-moon"></i>';  // Moon icon for dark mode
  }
});


// Set the default active tab
document.querySelector('.tab[data-tab="home"]').classList.add('active');
document.getElementById('home').classList.add('active');
