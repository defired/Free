function Login(form) {
    // Define valid usernames and passwords
    var username = ["member"];
    var password = ["12345678"];

    // Define the page to redirect to upon successful login
    var page = "https://defired.github.io/G/5.html"; // Use relative paths for web environments

    // Check if the entered username and password match any of the valid pairs
    if ((form.username.value == username[0] && form.password.value == password[0])) {
        // Set session storage to indicate the user is logged in
        sessionStorage.setItem("loggedIn", "true");

        // Redirect to the protected page
        self.location.href = page;
    } else {
        // If the username or password is incorrect, show an alert
        alert("Either the username or password you entered is incorrect.\nPlease try again.");
        form.username.focus();
    }
    return true;
}