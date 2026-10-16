# Projeto 3/100 — Formulário de Login

Vamos continuar nossa coleção de 100 formulários, do básico ao profissional. Neste projeto, você vai criar uma tela de login moderna e responsiva, usando HTML e CSS, com um pequeno recurso de JavaScript para mostrar ou ocultar a senha.

[Exploring the Button Component in shadcn UI: Variants, Customizations, and Examples | by Md Enayetur Rahman | Medium](https://images.openai.com/static-rsc-4/tOqS0meJ3PkvH5Y88r0uNNg0Ev4IgvY-p-g3hB2YCaL5ZJjzhmrOnUkRyr_bHLEQULGwa-5a04EWB4rELR9EXtNfhy5yBnwEUERdKb_eClmomdGetoxTsEHcMDrpPzc172eLxYXYuAsWOBdTHNIyg_CEVJ-hpfKx6VuLd6Rb5yU?purpose=inline)

[medium.com](https://medium.com/%40enayetflweb/exploring-the-button-component-in-shadcn-ui-variants-customizations-and-examples-2aeab7b2ebf5?utm_source=chatgpt.com)

HTML5

CSS3

JavaScript

## 1. O que vamos construir

- Campo de e-mail com validação básica.
- Campo de senha com opção de visualizar o conteúdo.
- Checkbox para lembrar o usuário.
- Link para recuperar a senha.
- Botão para entrar.
- Link para criar uma conta.
- Layout adaptável a celulares e computadores.
- Mensagem demonstrativa ao enviar o formulário.

## 2. Estrutura dos arquivos

Crie uma pasta chamada `projeto-03-formulario-login`:

```
projeto-03-formulario-login/
├── index.html
├── style.css
└── script.js
```

## 3. HTML completo — `index.html`

O HTML define os campos, as etiquetas, os links e a estrutura visual do login.

```

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Página de login para acessar sua conta."
    >

    <title>Login | Minha Conta</title>

    <link rel="stylesheet" href="style.css">

    <script src="script.js" defer></script>
</head>

<body>

    <main class="page-container">

        <section class="login-card" aria-labelledby="login-title">

            <header class="login-header">
                <div class="logo" aria-hidden="true">M</div>

                <h1 id="login-title">Bem-vindo de volta!</h1>

                <p>Entre com seus dados para continuar.</p>
            </header>

            <form id="login-form">

                <div class="form-group">
                    <label for="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="voce@exemplo.com"
                        autocomplete="username"
                        required
                    >
                </div>

                <div class="form-group">
                    <div class="password-label">
                        <label for="senha">Senha</label>

                        <a href="recuperar-senha.html">
                            Esqueceu a senha?
                        </a>
                    </div>

                    <div class="password-wrapper">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            autocomplete="current-password"
                            required
                        >

                        <button
                            type="button"
                            id="toggle-password"
                            class="toggle-password"
                            aria-controls="senha"
                            aria-label="Mostrar senha"
                            aria-pressed="false"
                        >
                            Mostrar
                        </button>
                    </div>
                </div>

                <div class="form-options">
                    <label class="remember-option" for="lembrar">
                        <input
                            type="checkbox"
                            id="lembrar"
                            name="lembrar"
                        >

                        <span>Lembrar de mim</span>
                    </label>
                </div>

                <button type="submit" class="login-button">
                    Entrar
                </button>

                <p
                    id="form-message"
                    class="form-message"
                    role="status"
                    aria-live="polite"
                ></p>

            </form>

            <footer class="login-footer">
                <p>
                    Ainda não tem uma conta?
                    <a href="cadastro.html">Criar conta</a>
                </p>
            </footer>

        </section>

    </main>

</body>

</html>

```

### Entenda alguns detalhes importantes

- `autocomplete="username"`: permite que o navegador reconheça o campo de identificação da conta, mesmo quando usamos um e-mail.
- `autocomplete="current-password"`: indica que o campo recebe a senha atual.
- `required`: impede o envio quando o campo está vazio.
- `type="button"`: impede que o botão de mostrar senha envie o formulário.
- `defer`: faz o navegador executar o JavaScript depois de interpretar o HTML.
- `aria-live="polite"`: permite que tecnologias assistivas anunciem a mensagem de retorno.

## 4. CSS completo — `style.css`

Aqui vamos aplicar centralização com Flexbox, limite de largura com `max-width`, espaçamento com `padding` e estados visuais para os campos.

```

/* ==========================
   1. RESET
========================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ==========================
   2. CONFIGURAÇÕES GERAIS
========================== */

body {
    font-family: Arial, Helvetica, sans-serif;
    color: #1e293b;
    background-color: #f1f5f9;
    line-height: 1.5;
}

/* ==========================
   3. CENTRALIZAÇÃO DA PÁGINA
========================== */

.page-container {
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 24px 16px;
}

/* ==========================
   4. CARTÃO DE LOGIN
========================== */

.login-card {
    width: 100%;
    max-width: 420px;

    padding: 36px;

    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;

    box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
}

/* ==========================
   5. CABEÇALHO
========================== */

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.logo {
    width: 56px;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto 18px;

    background-color: #2563eb;
    color: #ffffff;

    border-radius: 14px;

    font-size: 28px;
    font-weight: bold;
}

.login-header h1 {
    margin-bottom: 8px;
    font-size: 25px;
    line-height: 1.3;
}

.login-header p {
    color: #64748b;
    font-size: 14px;
}

/* ==========================
   6. GRUPOS DE CAMPOS
========================== */

.form-group {
    margin-bottom: 22px;
}

.form-group > label,
.password-label > label {
    display: block;
    margin-bottom: 8px;

    font-size: 14px;
    font-weight: 600;
}

/* ==========================
   7. LINKS
========================== */

a {
    color: #2563eb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:focus-visible,
button:focus-visible,
input:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 3px;
}

/* ==========================
   8. INPUTS
========================== */

.form-group > input,
.password-wrapper input {
    width: 100%;
    min-width: 0;

    padding: 13px 14px;

    border: 1px solid #cbd5e1;
    border-radius: 8px;

    background-color: #ffffff;
    color: #1e293b;

    font: inherit;
    font-size: 14px;

    transition:
        border-color 0.2s,
        box-shadow 0.2s;
}

.form-group input::placeholder {
    color: #94a3b8;
}

.form-group input:focus {
    border-color: #2563eb;
    outline: none;

    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

/* ==========================
   9. LINHA DO RÓTULO DA SENHA
========================== */

.password-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.password-label a {
    margin-bottom: 8px;
    font-size: 12px;
}

/* ==========================
   10. CAMPO DE SENHA
========================== */

.password-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    padding-right: 10px;

    border: 1px solid #cbd5e1;
    border-radius: 8px;
}

.password-wrapper input {
    border: none;
    box-shadow: none;
    outline: none;
}

.password-wrapper:focus-within {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.password-wrapper input:focus {
    box-shadow: none;
}

.toggle-password {
    flex-shrink: 0;

    padding: 6px 2px;

    border: none;
    background: transparent;
    color: #2563eb;

    font-size: 12px;
    font-weight: bold;

    cursor: pointer;
}

/* ==========================
   11. LEMBRAR DE MIM
========================== */

.form-options {
    margin: 2px 0 24px;
}

.remember-option {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    color: #475569;
    font-size: 13px;

    cursor: pointer;
}

.remember-option input {
    width: 16px;
    height: 16px;
    accent-color: #2563eb;
}

/* ==========================
   12. BOTÃO DE LOGIN
========================== */

.login-button {
    width: 100%;

    padding: 14px;

    border: none;
    border-radius: 8px;

    background-color: #2563eb;
    color: #ffffff;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    transition:
        background-color 0.2s,
        transform 0.2s;
}

.login-button:hover {
    background-color: #1d4ed8;
}

.login-button:active {
    transform: scale(0.99);
}

/* ==========================
   13. MENSAGEM DO FORMULÁRIO
========================== */

.form-message {
    margin-top: 14px;
    font-size: 13px;
    text-align: center;
}

.form-message:empty {
    display: none;
}

/* ==========================
   14. RODAPÉ
========================== */

.login-footer {
    margin-top: 26px;
    padding-top: 22px;

    border-top: 1px solid #e2e8f0;

    text-align: center;
    font-size: 13px;
    color: #64748b;
}

.login-footer a {
    font-weight: bold;
}

/* ==========================
   15. RESPONSIVIDADE
========================== */

@media (max-width: 480px) {
    .login-card {
        padding: 28px 20px;
        border-radius: 12px;
    }

    .login-header h1 {
        font-size: 22px;
    }

    .password-label {
        align-items: flex-start;
    }
}

```

## 5. JavaScript completo — `script.js`

Agora vamos implementar duas funcionalidades:

1. Mostrar ou ocultar a senha.
2. Exibir uma mensagem demonstrativa quando o formulário for enviado.

```

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

```

## 6. Como testar

Teste 1 — Campos obrigatórios

Tente clicar em Entrar sem preencher nada. O navegador deverá solicitar os campos obrigatórios.

Teste 2 — Mostrar senha

Digite uma senha e clique em Mostrar. O conteúdo ficará visível; clique em Ocultar para escondê-lo novamente.

Teste 3 — Responsividade

Redimensione o navegador ou abra a página no celular. O cartão deverá se adaptar à largura disponível.

Teste 4 — Envio

Preencha os campos e clique em Entrar. Você verá a mensagem demonstrativa, sem autenticação real.

## 7. Conceitos profissionais que você precisa entender

| Propriedade ou recurso    | O que faz neste projeto                                  |
| ------------------------- | -------------------------------------------------------- |
| `width: 100%`             | Ocupa toda a largura disponível do elemento pai.         |
| `max-width: 420px`        | Impede que o cartão ultrapasse 420 px.                   |
| `min-height: 100vh`       | Garante uma altura mínima igual à altura da janela.      |
| `display: flex`           | Organiza elementos usando Flexbox.                       |
| `align-items: center`     | Centraliza os elementos no eixo transversal.             |
| `justify-content: center` | Centraliza os elementos no eixo principal.               |
| `:focus-within`           | Destaca o contêiner quando um campo interno recebe foco. |
| `addEventListener()`      | Registra uma função para responder a um evento.          |
| `preventDefault()`        | Impede o comportamento padrão do envio neste exemplo.    |

## 8. O que falta para esse login ser profissional de verdade?

Este projeto é uma interface frontend funcional para estudo, mas não é um sistema de autenticação seguro. Para transformá-lo em uma aplicação real, ainda precisaríamos de:

- Backend em Node.js ou PHP.
- Verificação das credenciais no servidor.
- Senhas armazenadas com hash seguro, nunca em texto puro.
- Sessões seguras ou tokens tratados adequadamente.
- Proteção contra tentativas repetidas de login.
- Recuperação de senha por um fluxo seguro.
- Validação dos dados também no servidor.

Os links `recuperar-senha.html` e `cadastro.html` são apenas destinos de exemplo; as páginas correspondentes ainda não foram criadas.

## Próximo passo

Como deseja continuar a coleção?

Projeto 4 — Formulário de pesquisa de vagas

Aprimorar o login com mais JavaScript

Transformar o login em uma aplicação com backend

Continuar