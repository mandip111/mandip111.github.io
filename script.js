// script.js

// Example:  Simple form validation for the contact form (contact.html)
document.addEventListener('DOMContentLoaded', function() { // Ensure the DOM is fully loaded

    const contactForm = document.getElementById('contact-form');

    if (contactForm) { // Only run this code if the contact form exists on the page
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value.trim()) {
                alert('Please enter your name.');
                isValid = false;
                nameInput.focus();
            } else if (!emailInput.value.trim()) {
                alert('Please enter your email.');
                isValid = false;
                emailInput.focus();
            } else if (!isValidEmail(emailInput.value.trim())) {
                alert('Please enter a valid email address.');
                isValid = false;
                emailInput.focus();
            } else if (!messageInput.value.trim()) {
                alert('Please enter a message.');
                isValid = false;
                messageInput.focus();
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                // Optionally, you could add code here to display a "Thank you" message
                // instead of actually submitting the form (since we don't have a backend).
                alert("Thank you for your message!  (Form submission is simulated)");
                event.preventDefault(); //Prevent the form from trying to submit.
            }
        });
    }


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Example:  Smooth scrolling to sections (if you want to add anchor links within pages)
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {  //Check if it is an internal anchor link
                event.preventDefault(); // Prevent default jump-to-anchor behavior
                const targetId = href.substring(1); // Remove the '#'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Enable smooth scrolling
                    });
                }
            }
        });
    });

});
