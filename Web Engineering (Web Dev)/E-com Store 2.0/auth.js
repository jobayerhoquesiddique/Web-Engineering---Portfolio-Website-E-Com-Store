const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("register-btn").addEventListener("click", () => {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful! Please Login.");
});

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", email);
        alert("Login Successful!");
        window.location.href = "index.html";  // Redirect to home
    } else {
        alert("Invalid credentials!");
    }
});
