 function validation() {
            let fname = document.getElementById('fname').value.trim();
            let lname = document.getElementById('lname').value.trim();
            let email = document.getElementById('email').value.trim();
            let password = document.getElementById('password').value.trim();

            let namePat = /^[A-Za-z]+$/;
            let emailPat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let passwordPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            let valid = true;

            // First Name Validation
            if (!namePat.test(fname)) {
                document.getElementById('errorfname').innerHTML = "Please enter a valid first name";
                valid = false;
            } else {
                document.getElementById('errorfname').innerHTML = "";
            }

            // Last Name Validation
            if (!namePat.test(lname)) {
                document.getElementById('errorlname').innerHTML = "Please enter a valid last name";
                valid = false;
            } else {
                document.getElementById('errorlname').innerHTML = "";
            }

            // Email Validation
            if (!emailPat.test(email)) {
                document.getElementById('erroremail').innerHTML = "Please enter a valid email";
                valid = false;
            } else {
                document.getElementById('erroremail').innerHTML = "";
            }

            // Password Validation
            if (!passwordPat.test(password)) {
                document.getElementById('errorpassword').innerHTML =
                    "Password must be at least 8 characters, include uppercase, lowercase.";
                valid = false;
            } else {
                document.getElementById('errorpassword').innerHTML = "";
            }

            // Clear fields if all are valid
            if (valid) {
                document.getElementById('fname').value = "";
                document.getElementById('lname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
                alert("Registration successful!");
            }
        }