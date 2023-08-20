function checkEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
  
    if (!validateEmail(email)) {
      emailError.style.display = "block"; // Show the error message
    } else {
      emailError.style.display = "none"; // Hide the error message
    }
  }

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const sex = document.getElementById("sex").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match.");
        return;
    }

    const output = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      <p>Sex: ${sex}</p>
    `;

    document.getElementById("output").innerHTML = output;
}
