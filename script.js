        // Initialize AOS
        AOS.init({
            once: true
        });

        // Handle header padding on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            }
        });

        // Modal functionality
        const modal = document.getElementById('loginModal');
        const signInBtn = document.getElementById('signInBtn');
        const closeBtn = document.querySelector('.close');
        const userTypeBtns = document.querySelectorAll('.user-type-btn');
        const modalSubtext = document.querySelector('.modal-subtext');
        const loginForm = document.getElementById('loginForm');
        const signupLink = document.getElementById('signupLink');

        // Open modal when Sign In button is clicked
        signInBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        // Close modal when X is clicked
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // User type toggle functionality
        userTypeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                userTypeBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update subtext based on user type
                const userType = this.getAttribute('data-type');
                if (userType === 'buyer') {
                    modalSubtext.textContent = 'Continue as buyer';
                } else {
                    modalSubtext.textContent = 'Continue as seller';
                }
            });
        });

        // Handle form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const userType = document.querySelector('.user-type-btn.active').getAttribute('data-type');
            
            // In a real application, you would send this data to a server
            console.log(`Login attempt as ${userType}:`, { email, password });
            
            // For demo purposes, just close the modal
            modal.style.display = 'none';
            
            // Clear the form
            loginForm.reset();
        });

        // Sign up link functionality
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Sign up functionality would go here!');
        });