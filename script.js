function showAlert() {
    alert('¡Hola, te invito a unirte al Discord para poder comunicarnos!');
}

const form = document.getElementById('MyForm') ;
form.addEventListener('submit' , function (event) {
    event.preventDefault () ;
    validateForm () ;
}) ;

function validateEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test (email)
}

function validateForm () {
    const emailInput = document.getElementById ('email');
    const email = emailInput.value ;
  if (!validateEmail (email) ) {
    alert ('Por favor ingerese un correo electronico valido.') ;
}   else {
    alert ('correo electronico enviado correctamente.') ;
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")})
