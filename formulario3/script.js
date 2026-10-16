
"use strict";

// Seleciona os elementos do HTML.
const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#senha");
const togglePasswordButton = document.querySelector("#toggle-password");
const formMessage = document.querySelector("#form-message");

// Mostra ou oculta a senha.
togglePasswordButton.addEventListener("click", () => {
    const passwordIsVisible = passwordInput.type === "text";

    if (passwordIsVisible) {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "Mostrar";
        togglePasswordButton.setAttribute(
            "aria-label",
            "Mostrar senha"
        );
        togglePasswordButton.setAttribute("aria-pressed", "false");
    } else {
        passwordInput.type = "text";
        togglePasswordButton.textContent = "Ocultar";
        togglePasswordButton.setAttribute(
            "aria-label",
            "Ocultar senha"
        );
        togglePasswordButton.setAttribute("aria-pressed", "true");
    }
});

// Trata o envio demonstrativo do formulário.
loginForm.addEventListener("submit", (event) => {
    // Impede o recarregamento da página.
    event.preventDefault();

    // A validação HTML acontece antes deste evento.
    formMessage.textContent =
        "Formulário preenchido! A autenticação ainda precisa de um servidor.";
});
