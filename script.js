const form = document.querySelector("form");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();

    let hasErrors = false;

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const consenha = document.getElementById("consenha").value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!nome) {
        document.getElementById('error-required-nome').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-nome').style.display = "none";
    }

    if (!email) {
        document.getElementById('error-required-email').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-email').style.display = "none";
    }

    if (!senha) {
        document.getElementById('error-required-senha').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senha').style.display = "none";
    }

    if (!consenha) {
        document.getElementById('error-required-consenha').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-consenha').style.display = "none";
    }

    if (consenha != senha) {
        document.getElementById('error-required-senhasdiferentes').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhasdiferentes').style.display = "none";
    }

    if (!emailRegex.test(email)) {
        document.getElementById('error-required-emailvalido').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emailvalido').style.display = "none";
    }

    if (senha.length < 8) {
        document.getElementById('error-required-senhas8l').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhas8l').style.display = "none";
    }

    if (!hasErrors) {
        document.getElementById('sucesso').style.display = "block";
        // You may want to submit the form here if there are no errors
        // form.submit();
    }
})
function darkmode() {
    const pagina = document.body;
    const formulario = document.getElementById("formulario");
    const navcor = document.getElementById(".navcor");

    formulario.classList.toggle("formulario");
    pagina.classList.toggle("dark-mode");

    const botao = document.getElementById('darkmode');
    const isdarkmode = document.body.classList.contains("dark-mode");

    if (isdarkmode === true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}   
