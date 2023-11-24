const form = document.querySelector("form");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();
    
        const nome = document.getElementById("nome").value;
        const email = document.querySelector("#email").value;
        const senha = document.getElementById("senha").value;
        const consenha = document.getElementById("consenha").value;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    
        if (!nome) {
            document.getElementById('error-required-nome').style.display = "block";
        } else {
            document.getElementById('error-required-nome').style.display = "none";
            return
        }
    
        if (!email) {
            document.getElementById('error-required-email').style.display = "block";
        } else {
            document.getElementById('error-required-email').style.display = "none";
            return
        }
    
        if (!senha) {
            document.getElementById('error-required-senha').style.display = "block";
        } else {
            document.getElementById('error-required-senha').style.display = "none";
            return
        }
    
        if (!consenha) {
            document.getElementById('error-required-consenha').style.display = "block";
        } else {
            document.getElementById('error-required-consenha').style.display = "none";
            return
        }
    
        if (consenha != senha) {
            document.getElementById('error-required-senhasadiferentes').style.display = "block";
        } else {
            document.getElementById('error-required-senhasdiferentes').style.display = "none";
            return
        }
    
        if (!emailRegex.test(email)) {
            document.getElementById('error-required-emailvalido').style.display = "block";
        } else {
            document.getElementById('error-required-emailvalido').style.display = "none";
            return
        }
    
        if (senha.length < 8) {
            document.getElementById('error-required-senhas8l').style.display = "block";
        } else {
            document.getElementById('error-required-senhas8l').style.display = "none";
            return
        }
        document.getElementById('sucesso').style.display = "block";
    })