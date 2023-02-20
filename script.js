// Get the projects and filter buttons
const projects = document.querySelectorAll('.project');
const filterButtons = document.querySelectorAll('.filter-button');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    // Show projects with matching category and hide others
    projects.forEach(project => {
      if (project.dataset.category === category || category === 'all') {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
    // Mark the active filter button
    filterButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
  });
});
