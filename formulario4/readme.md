# Projeto 4 de 100 — Formulário de Pesquisa de Vagas de Emprego

Neste projeto, vamos criar um formulário de pesquisa de vagas usando HTML e CSS, com visual profissional e responsivo. Ele será uma pequena interface de um portal de empregos, semelhante aos filtros encontrados em sites de recrutamento.

[Exploring Job Opportunities in Jacksonville, FL, Las Vegas, NV, and San Antonio, TX with job indeed](https://images.openai.com/static-rsc-4/opH3r9i-9WyqUoe5-hJnWTszF6CoiB7U5_WoydL7kquIe6X_L5sFFhfH-gQKlWKcsu8CMAHLBBE9Hm8F87qyVbCrtRR11asbFbwv83DUol9EhGCQXOCGGQhD0s9_vhOTlcTqtOJD-R-VXcqNPS-M4WQSjz6fKAPRxQ_reGWlorI?purpose=inline)

[timesways.com](https://www.timesways.com/exploring-job-opportunities-in-jacksonville-fl-las-vegas-nv-and-san-antonio-tx-with-job-indeed/?utm_source=chatgpt.com)

Referência visual para o projeto: interface limpa, campos organizados e botão de pesquisa em destaque.

## 1. O que vamos desenvolver

O formulário terá:

- Campo para pesquisar o cargo ou a palavra-chave.
- Campo para informar a cidade.
- Seleção de modalidade: presencial, remoto ou híbrido.
- Seleção do tipo de contrato.
- Campo para definir a faixa salarial mínima.
- Botão para pesquisar e botão para limpar os filtros.

Também vamos praticar conceitos importantes de CSS: `width`, `max-width`, `display: grid`, `gap`, `padding`, `border-radius` e `@media`.

## 2. Estrutura dos arquivos

Crie uma pasta chamada `projeto-04-pesquisa-vagas`:

```
projeto-04-pesquisa-vagas/
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
        content="Pesquise vagas de emprego por cargo, localização e modalidade."
    >

    <title>Pesquisar Vagas de Emprego</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="container">

        <section class="search-card">

            <header class="header">
                <span class="subtitle">SUA PRÓXIMA OPORTUNIDADE</span>

                <h1>Encontre seu próximo emprego</h1>

                <p>
                    Pesquise vagas e encontre uma oportunidade
                    que combine com você.
                </p>
            </header>

            <form class="search-form" action="#" method="get">

                <div class="form-group">
                    <label for="cargo">Cargo ou palavra-chave</label>

                    <input
                        type="search"
                        id="cargo"
                        name="cargo"
                        placeholder="Ex.: Desenvolvedor Frontend"
                    >
                </div>

                <div class="form-group">
                    <label for="cidade">Cidade ou estado</label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        placeholder="Ex.: Belo Horizonte, MG"
                    >
                </div>

                <div class="form-group">
                    <label for="modalidade">Modalidade de trabalho</label>

                    <select id="modalidade" name="modalidade">
                        <option value="">Todas as modalidades</option>
                        <option value="presencial">Presencial</option>
                        <option value="remoto">Remoto</option>
                        <option value="hibrido">Híbrido</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="contrato">Tipo de contrato</label>

                    <select id="contrato" name="contrato">
                        <option value="">Todos os contratos</option>
                        <option value="clt">CLT</option>
                        <option value="pj">Pessoa Jurídica (PJ)</option>
                        <option value="estagio">Estágio</option>
                        <option value="temporario">Temporário</option>
                        <option value="freelancer">Freelancer</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="salario">Salário mínimo desejado</label>

                    <select id="salario" name="salario">
                        <option value="">Não especificado</option>
                        <option value="2000">R$ 2.000</option>
                        <option value="3000">R$ 3.000</option>
                        <option value="5000">R$ 5.000</option>
                        <option value="7000">R$ 7.000</option>
                        <option value="10000">R$ 10.000 ou mais</option>
                    </select>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn-search">
                        Pesquisar vagas
                    </button>

                    <button type="reset" class="btn-reset">
                        Limpar filtros
                    </button>
                </div>

            </form>

            <footer class="footer">
                <p>Seu próximo passo profissional começa aqui.</p>
            </footer>

        </section>

    </main>

</body>
</html>

```

## 4. Código completo do CSS

Crie o arquivo `style.css`. Observe como utilizamos o Grid para organizar os campos em duas colunas e o Flexbox para organizar os botões.

```

/* =========================
   1. RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* =========================
   2. ESTILOS GERAIS
========================= */

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f1f5f9;
    color: #1e293b;
    line-height: 1.6;
}

/* =========================
   3. CONTAINER PRINCIPAL
========================= */

.container {
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px 20px;
}

/* =========================
   4. CARTÃO DA PESQUISA
========================= */

.search-card {
    width: 100%;
    max-width: 850px;

    background-color: #ffffff;

    padding: 40px;

    border-radius: 16px;

    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
}

/* =========================
   5. CABEÇALHO
========================= */

.header {
    text-align: center;
    margin-bottom: 32px;
}

.subtitle {
    display: inline-block;

    margin-bottom: 12px;

    color: #2563eb;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.header h1 {
    font-size: clamp(25px, 4vw, 34px);
    line-height: 1.2;

    color: #0f172a;

    margin-bottom: 14px;
}

.header p {
    color: #64748b;
    font-size: 15px;
}

/* =========================
   6. GRID DO FORMULÁRIO
========================= */

.search-form {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 24px 20px;
}

/* =========================
   7. GRUPOS DE CAMPOS
========================= */

.form-group {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.form-group label {
    color: #334155;

    font-size: 14px;
    font-weight: 700;
}

/* =========================
   8. INPUTS E SELECTS
========================= */

.form-group input,
.form-group select {
    width: 100%;
    min-height: 48px;

    padding: 12px 14px;

    border: 1px solid #cbd5e1;
    border-radius: 8px;

    background-color: #ffffff;
    color: #1e293b;

    font-family: inherit;
    font-size: 14px;
}

.form-group input::placeholder {
    color: #94a3b8;
}

/* =========================
   9. ESTADO DE FOCO
========================= */

.form-group input:focus,
.form-group select:focus {
    outline: 2px solid transparent;

    border-color: #2563eb;

    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* =========================
   10. BOTÕES
========================= */

.form-actions {
    grid-column: 1 / -1;

    display: flex;
    gap: 12px;

    margin-top: 8px;
}

.form-actions button {
    min-height: 48px;

    padding: 12px 20px;

    border-radius: 8px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
}

.btn-search {
    flex: 1;

    border: 1px solid #2563eb;

    background-color: #2563eb;
    color: #ffffff;
}

.btn-search:hover {
    background-color: #1d4ed8;
}

.btn-reset {
    border: 1px solid #cbd5e1;

    background-color: #ffffff;
    color: #334155;
}

.btn-reset:hover {
    background-color: #f1f5f9;
}

.form-actions button:active {
    transform: scale(0.98);
}

.form-actions button:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 3px;
}

/* =========================
   11. RODAPÉ
========================= */

.footer {
    margin-top: 28px;
    padding-top: 20px;

    border-top: 1px solid #e2e8f0;

    text-align: center;

    color: #64748b;
    font-size: 13px;
}

/* =========================
   12. RESPONSIVIDADE
========================= */

@media (max-width: 600px) {

    .container {
        padding: 20px 12px;
    }

    .search-card {
        padding: 26px 18px;
    }

    .search-form {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .form-actions {
        flex-direction: column;
    }

    .form-actions button {
        width: 100%;
    }

}

```

## 5. Entendendo os conceitos mais importantes

### `width` versus `max-width`

Este é um dos conceitos fundamentais para criar layouts profissionais.

```
.search-card {
    width: 100%;
    max-width: 850px;
}
```

- `width: 100%`: o cartão pode ocupar toda a largura disponível do seu contêiner.
- `max-width: 850px`: ele não ultrapassará 850 pixels de largura.

Assim, em um monitor largo, o formulário permanece limitado. Em um celular, ele pode encolher para caber na tela.

### `grid-template-columns`

```
.search-form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 20px;
}
```

Visualização simplificada do Grid

Cargo

Cidade

Modalidade

Contrato

No desktop, os campos ficam distribuídos em duas colunas.

- `repeat(2, ...)` cria duas colunas.
- `1fr` distribui o espaço disponível entre elas.
- `minmax(0, 1fr)` permite que as colunas encolham sem serem forçadas pelo tamanho mínimo do conteúdo.
- `gap: 24px 20px` define 24 px entre as linhas e 20 px entre as colunas.

### `grid-column: 1 / -1`

```
.form-actions {
    grid-column: 1 / -1;
}
```

Essa regra faz os botões ocuparem todas as colunas do Grid, em vez de ficarem limitados a uma única coluna.

### Responsividade com `@media`

```
@media (max-width: 600px) {
    .search-form {
        grid-template-columns: 1fr;
    }
}
```

Quando a tela tiver até 600 px, os campos passam a ocupar uma única coluna. Essa técnica evita que o formulário fique apertado em celulares.

## 6. Teste seu conhecimento

1\. Qual propriedade impede o cartão de ultrapassar 850 px?

width: 850px

max-width: 850px

min-height: 850px

2\. Qual propriedade cria duas colunas iguais no Grid?

display: flex

grid-template-columns: repeat(2, minmax(0, 1fr))

position: absolute

3\. Para que serve o botão type="reset"?

Enviar os dados ao servidor

Apagar o arquivo HTML

Restaurar os campos aos valores iniciais

Refazer teste

## 7. Resultado e próximo passo

O projeto está pronto para executar no navegador. Os campos de pesquisa e o botão de limpar já funcionam como formulário HTML, mas a pesquisa ainda não consulta vagas reais: para isso, precisaríamos conectar a interface a uma API ou a um backend.

Para manter nossa sequência de 100 projetos, o próximo é o Projeto 5 — Formulário de pesquisa no Google, em que vamos explorar o funcionamento de `GET`, parâmetros na URL e campos de busca.