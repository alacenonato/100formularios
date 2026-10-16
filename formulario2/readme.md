# Projeto 2/100 — Formulário de Cadastro Pessoal

Vamos avançar para um formulário mais completo, utilizando HTML5 e CSS3, com campos organizados, layout profissional e adaptação para celulares.

[portfolio site](https://images.openai.com/static-rsc-4/HfGWp03E1y7ebqHWmnflzk5zuVFhwLZSUVXpOFAK1nSxgKEc6kNHORtIo6GCd1rF93pZgwMgc63vTtYvVqUKk3Qyd0i1xup6s4r69MGvUG8f5xMgOgf9VSn6qvYvMRXcJfKzi3H-blram-2ePxd9mE5Wi6fSit6x3MUFEZKWJUI?purpose=inline)

[bhushanpatil288.github.io](https://bhushanpatil288.github.io/portfolio/?utm_source=chatgpt.com)

## 1. O que vamos aprender

Neste projeto, você vai praticar:

- Campos de texto para nome e sobrenome.
- Campos de data, telefone e e-mail.
- Listas de seleção com `<select>`.
- Botões de opção com `radio`.
- Checkbox para aceitar os termos.
- Organização de campos usando CSS Grid.
- Validação básica com atributos HTML.
- Layout responsivo para dispositivos móveis.

## 2. Estrutura dos arquivos

Crie uma pasta chamada `projeto-02-cadastro-pessoal`:

```
projeto-02-cadastro-pessoal/
├── index.html
└── style.css
```

## 3. Código completo do HTML

Crie o arquivo `index.html`.

```

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Formulário de cadastro pessoal."
    >

    <title>Cadastro Pessoal</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="container">

        <section class="form-card">

            <header class="form-header">
                <h1>Cadastro Pessoal</h1>
                <p>Preencha seus dados para realizar o cadastro.</p>
            </header>

            <form action="#" method="post">

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <div class="form-grid">

                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Seu nome"
                                autocomplete="given-name"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="sobrenome">Sobrenome</label>
                            <input
                                type="text"
                                id="sobrenome"
                                name="sobrenome"
                                placeholder="Seu sobrenome"
                                autocomplete="family-name"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="nascimento">
                                Data de nascimento
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                autocomplete="bday"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="genero">Gênero</label>

                            <select id="genero" name="genero" required>
                                <option value="" selected disabled>
                                    Selecione
                                </option>

                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="nao-informar">
                                    Prefiro não informar
                                </option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Informações de contato</legend>

                    <div class="form-grid">

                        <div class="form-group">
                            <label for="email">E-mail</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="voce@exemplo.com"
                                autocomplete="email"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="telefone">Telefone</label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                placeholder="(31) 99999-9999"
                                autocomplete="tel"
                                required
                            >
                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div class="form-grid">

                        <div class="form-group">
                            <label for="cep">CEP</label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder="00000-000"
                                autocomplete="postal-code"
                                inputmode="numeric"
                                pattern="[0-9]{5}-?[0-9]{3}"
                                title="Informe um CEP válido, com 8 dígitos."
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="cidade">Cidade</label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder="Sua cidade"
                                autocomplete="address-level2"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="estado">Estado</label>

                            <select
                                id="estado"
                                name="estado"
                                autocomplete="address-level1"
                                required
                            >
                                <option value="" selected disabled>
                                    Selecione
                                </option>

                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="rua">Rua e número</label>

                            <input
                                type="text"
                                id="rua"
                                name="rua"
                                placeholder="Rua, número e complemento"
                                autocomplete="street-address"
                                required
                            >
                        </div>

                    </div>
                </fieldset>

                <div class="form-group terms">
                    <input
                        type="checkbox"
                        id="termos"
                        name="termos"
                        required
                    >

                    <label for="termos">
                        Confirmo que os dados informados estão corretos.
                    </label>
                </div>

                <div class="form-actions">
                    <button type="reset" class="btn-secondary">
                        Limpar
                    </button>

                    <button type="submit" class="btn-primary">
                        Realizar cadastro
                    </button>
                </div>

            </form>

        </section>

    </main>

</body>
</html>

```

## 4. Código completo do CSS

Crie o arquivo `style.css`.

```

/* ==========================
   1. RESET E CONFIGURAÇÕES
========================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f1f5f9;
    color: #1e293b;
    line-height: 1.6;
}

/* ==========================
   2. CONTAINER PRINCIPAL
========================== */

.container {
    width: 100%;
    min-height: 100vh;
    padding: 40px 20px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
}

/* ==========================
   3. CARTÃO DO FORMULÁRIO
========================== */

.form-card {
    width: 100%;
    max-width: 850px;
    padding: 35px;

    background: #ffffff;
    border-radius: 14px;

    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
}

/* ==========================
   4. CABEÇALHO
========================== */

.form-header {
    margin-bottom: 30px;
    text-align: center;
}

.form-header h1 {
    margin-bottom: 8px;
    color: #1d4ed8;
    font-size: 30px;
}

.form-header p {
    color: #64748b;
    font-size: 15px;
}

/* ==========================
   5. SEÇÕES DO FORMULÁRIO
========================== */

fieldset {
    min-width: 0;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 25px;
}

legend {
    padding: 0 10px;
    color: #1d4ed8;
    font-weight: bold;
    font-size: 16px;
}

/* ==========================
   6. GRID DE CAMPOS
========================== */

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.form-group {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.form-group label {
    font-size: 14px;
    font-weight: bold;
    color: #334155;
}

/* ==========================
   7. CAMPOS DE ENTRADA
========================== */

.form-group input,
.form-group select {
    width: 100%;
    min-height: 45px;
    padding: 11px 12px;

    border: 1px solid #cbd5e1;
    border-radius: 7px;

    background: #ffffff;
    color: #1e293b;

    font: inherit;
    font-size: 14px;

    transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input::placeholder {
    color: #94a3b8;
}

/* ==========================
   8. FOCO E ACESSIBILIDADE
========================== */

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* ==========================
   9. TERMOS
========================== */

.terms {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    margin: 5px 0 25px;
}

.terms input {
    width: 17px;
    height: 17px;
    margin-top: 4px;
    flex-shrink: 0;
    accent-color: #2563eb;
}

.terms label {
    font-size: 13px;
    font-weight: normal;
}

/* ==========================
   10. BOTÕES
========================== */

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

.form-actions button {
    min-height: 45px;
    padding: 12px 22px;

    border: none;
    border-radius: 7px;

    font-size: 14px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
}

.btn-primary {
    background: #2563eb;
    color: #ffffff;
}

.btn-primary:hover {
    background: #1d4ed8;
}

.btn-secondary {
    background: #e2e8f0;
    color: #334155;
}

.btn-secondary:hover {
    background: #cbd5e1;
}

.form-actions button:active {
    transform: scale(0.98);
}

/* ==========================
   11. RESPONSIVIDADE
========================== */

@media (max-width: 600px) {
    .container {
        padding: 20px 12px;
    }

    .form-card {
        padding: 24px 16px;
    }

    .form-header h1 {
        font-size: 25px;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    fieldset {
        padding: 18px 12px;
    }

    .form-actions {
        flex-direction: column-reverse;
    }

    .form-actions button {
        width: 100%;
    }
}

```

## 5. Entenda os conceitos mais importantes

CSS Grid

```
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Divide os campos em duas colunas iguais. No celular, a regra dentro do `@media` transforma o layout em uma coluna.

`fieldset` e `legend`

Agrupam campos relacionados em seções, como dados pessoais, contato e endereço. Isso deixa o formulário mais organizado e semântico.

`required`, `pattern` e `type`

Ajudam o navegador a verificar os dados. O `type="email"` valida o formato básico do e-mail, enquanto `pattern` permite definir um padrão para o CEP. Essas verificações não substituem a validação no servidor.

`type="reset"`

O botão Limpar restaura os campos aos seus valores iniciais. Neste projeto, isso normalmente limpa os campos preenchidos pelo usuário.

## 6. Como testar

1. Salve os dois arquivos na mesma pasta.
2. Abra `index.html` no navegador.
3. Preencha os dados e tente enviar o formulário.
4. Experimente reduzir a largura da janela para testar a responsividade.
5. Clique em Limpar para testar o botão de redefinição.

Atenção: o formulário ainda não armazena os dados. O `action="#"` é apenas um destino provisório; para cadastrar pessoas de verdade, precisaremos de um backend.

## 7. Desafios práticos

Checklist do Projeto 2

0 de 5

Adicionar um campo para CPF.

Adicionar um campo para profissão.

Impedir a seleção de uma data de nascimento futura.

Criar um campo para número do endereço separado da rua.

Alterar as cores e criar uma identidade visual própria.

Próximo: Projeto 3/100 — Formulário de Login, com campo de senha, botão para mostrar ou ocultar a senha, validação e design profissional.