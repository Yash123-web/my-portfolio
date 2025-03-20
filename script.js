// Display current date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = `Current Date & Time: ${dateTimeString}`;
}
setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset(); // Clear the form
});