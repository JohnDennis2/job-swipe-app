
const profileFormHandler = async (event) => {
  
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  
  const firstName = document.querySelector('#profile-first').value.trim();
  const lastName = document.querySelector('#profile-last').value.trim();
  const recentJob = document.querySelector('#profile-recent-job').value.trim();
  const category = document.querySelector('#profile-category').value.trim();
  const salary = document.querySelector('#profile-salary').value.trim();
  const bio = document.querySelector('#profile-bio').value.trim();
  
    // Gather the data from the form elements on the page
    if (firstName && lastName && recentJob && category && salary && bio) {

      const response = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify({ firstName, lastName, recentJob, category, salary, bio }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('Profile created!');
      } else {
        alert('All forms are required!');
      }
    }
  };
  
  document
    .querySelector('.profile-form')
    .addEventListener('submit', profileFormHandler);
  