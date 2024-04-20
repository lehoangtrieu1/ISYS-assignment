// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Dark Mode Toggle Button
var darkModeToggleBtn = document.getElementById("add-button");
// Add click event listener to the toggle button
darkModeToggleBtn.addEventListener("click", toggleDarkMode);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const error = document.getElementById('error');

    // Check if all required fields are filled out
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        error.style.display = 'block'; // Display error message
    } else {
        // If all fields are filled out, submit the form
        error.style.display = 'none'; // Hide error message
        document.getElementById('contactForm').submit(); // Submit the form
    }
}

// Add event listener to form submission
document.getElementById('contactForm').addEventListener('submit', handleSubmit);


