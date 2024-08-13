function Login(form) {
    const username = ["member"];
    const password = ["12345678"];
    const page = "https://defired.github.io/G/5.html";

    // Check if the entered username and password match
    if (form.username.value === username[0] && form.password.value === password[0]) {
        sessionStorage.setItem("loggedIn", "true"); // Set session to indicate user is logged in
        window.location.href = page;
    } else {
        alert("Either the username or password you entered is incorrect.\nPlease try again.");
        form.username.focus();
    }
    return true;
}

function checkLogin() {
    // If the user is not logged in, redirect to the login page
    if (sessionStorage.getItem("loggedIn") !== "true") {
        alert("You must log in first.");
        window.location.replace("https://defired.github.io/G/login.html");
    }
}