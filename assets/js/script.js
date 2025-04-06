function showElements() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = "Informações preenchidas: \n\nNome: " + name + "\nE-mail: " + email + "\nSenha: " + password;

    alert(message);
}

function showPassword() {
    let input = document.getElementById("password");
    let mostrar = document.getElementById("btn-password");

    if (input.type === 'password') {
        input.setAttribute('type', 'text');
        mostrar.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        mostrar.classList.replace('bi-eye-slash', 'bi-eye');
    }
}