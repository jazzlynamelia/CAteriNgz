//toggle
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = function(element) {
        return document.querySelector(element);
    };
    
    const menuToggler = selectElement('.menu-toggle');
    const body = selectElement('body');
    
    if(menuToggler) {
        menuToggler.addEventListener('click', function () {
            body.classList.toggle('show');
        });
    }

    //close nav when nav link clicked
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            body.classList.remove('show');
        });
    });

});

//function to validate login form
function validateLoginForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');

    if(email.value.trim() === "") {
        alert("Email must be filled!");
    }
    else if(!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    }
    else if(password.value.trim() === "") {
        alert("Password must be filled!");
    }
    else {
        loginForm.submit();
        window.location.href = "home.html";
    }
}

// Function to validate the signup form
function validateSignUpForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const terms = document.getElementById('terms');
    const signUpForm = document.getElementById('signUpForm');

    const today = new Date();
    
    //set format as yyyy-mm-dd
    const todayString = today.toISOString().slice(0, 10);
    
    if(name.value.trim() === "") {
        alert("Name must be filled!");
    }
    else if(email.value.trim() === "") {
        alert("Email must be filled!");
    }
    else if(!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    }
    else if(gender.value.trim() === "") {
        alert("Gender must be filled!");
    }
    else if(!(gender.value.trim().toLowerCase() === "male" || gender.value.trim().toLowerCase() === "female")) {
        alert("Gender must be 'Male' or 'Female'");
    }
    else if(!dob.value) {
        alert("Date of birth must be filled!");
    }
    else if(dob.value >= todayString) {
        alert("Date of birth must be less than today's date");
    } 
    else if(address.value.trim() === "") {
        alert("Address must be filled!");
    }
    else if(password.value.trim() === "") {
        alert("Password must be filled!");
    }
    else if (password.value.trim().length < 6) {
        alert("Password must be at least 6 characters long!");
    }
    else if(password.value !== confirm.value) {
        alert("Passwords do not match!");
    }
    else if(!terms.checked) {
        alert("You must agree to the Privacy Policy and Terms & Conditions!");
    }
    else {
        signUpForm.submit();
        window.location.href = "login.html";
    }
}

function validateForgotPass() {
    const email = document.getElementById('email');

    if(email.value.trim() === "") {
        alert("Email must be filled!");
    }
    else if(!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    }
    else {
        forgotPassForm.submit();
        alert("Reset link has been send to your email!");
    }
}