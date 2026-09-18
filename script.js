const perguntas = [
    {
        pergunta: "O que é o ISO em uma câmera?",
        alternativas: [
            "A) A distância focal da lente",
            "B) A sensibilidade do sensor à luz",
            "C) A velocidade do obturador",
            "D) O tamanho da fotografia"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual é a principal função do obturador?",
        alternativas: [
            "A) Controlar o tempo de entrada de luz",
            "B) Alterar as cores da fotografia",
            "C) Aumentar o zoom",
            "D) Ajustar o foco automaticamente"
        ],
        resposta: 0
    },

    {
        pergunta: "O que acontece quando aumentamos a abertura do diafragma?",
        alternativas: [
            "A) Entra menos luz",
            "B) A fotografia fica sempre mais escura",
            "C) Entra mais luz na câmera",
            "D) A imagem perde resolução"
        ],
        resposta: 2
    },

    {
        pergunta: "Qual elemento é importante para criar uma boa composição fotográfica?",
        alternativas: [
            "A) Regra dos terços",
            "B) Aumentar sempre o ISO",
            "C) Usar sempre o flash",
            "D) Fotografar apenas no modo automático"
        ],
        resposta: 0
    },

    {
        pergunta: "O que é profundidade de campo?",
        alternativas: [
            "A) A distância entre o fotógrafo e a câmera",
            "B) A área da imagem que aparece em foco",
            "C) A quantidade de megapixels",
            "D) O tamanho do arquivo da foto"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual situação geralmente exige uma velocidade de obturador mais rápida?",
        alternativas: [
            "A) Fotografar uma paisagem parada",
            "B) Fotografar uma pessoa correndo",
            "C) Fotografar uma parede",
            "D) Fotografar um objeto imóvel"
        ],
        resposta: 1
    },

    {
        pergunta: "Para que serve o balanço de branco?",
        alternativas: [
            "A) Corrigir a aparência das cores conforme a iluminação",
            "B) Aumentar a resolução da imagem",
            "C) Alterar o formato do arquivo",
            "D) Aumentar o zoom da lente"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual formato preserva mais informações para edição posterior?",
        alternativas: [
            "A) GIF",
            "B) MP3",
            "C) RAW",
            "D) TXT"
        ],
        resposta: 2
    }
];

const nomes = [
    "Gabriel",
    "Júlia",
    "Lucas",
    "Mariana",
    "Rafael",
    "Beatriz",
    "Pedro",
    "Larissa"
];

let perguntaAtual = 0;
let pontos = 0;

const telaInicio = document.getElementById("inicio");
const telaJogo = document.getElementById("jogo");
const telaResultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");

const numeroPergunta = document.getElementById("numeroPergunta");
const nomeJogador = document.getElementById("nomeJogador");

const pontuacao = document.getElementById("pontuacao");
const mensagemResultado = document.getElementById("mensagemResultado");


// Escolhe um nome aleatório
function escolherNome() {

    const indice = Math.floor(Math.random() * nomes.length);

    return nomes[indice];
}


// Mostra uma pergunta
function mostrarPergunta() {

    const perguntaAtualDados = perguntas[perguntaAtual];

    numeroPergunta.textContent = perguntaAtual + 1;

    pergunta.textContent = perguntaAtualDados.pergunta;

    alternativas.innerHTML = "";

    perguntaAtualDados.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.classList.add("alternativa");

        botao.addEventListener("click", () => {

            verificarResposta(indice);

        });

        alternativas.appendChild(botao);
    });
}


// Verifica a resposta
function verificarResposta(indiceEscolhido) {

    const perguntaAtualDados = perguntas[perguntaAtual];

    const botoes = document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (indiceEscolhido === perguntaAtualDados.resposta) {

        pontos++;

        botoes[indiceEscolhido].classList.add("correta");

    } else {

        botoes[indiceEscolhido].classList.add("errada");

        botoes[perguntaAtualDados.resposta].classList.add("correta");
    }

    setTimeout(() => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    }, 800);
}


// Inicia o jogo
function iniciarJogo() {

    perguntaAtual = 0;

    pontos = 0;

    const nome = escolherNome();

    nomeJogador.textContent =
        `Em 2049, ${nome} recebeu uma missão fotográfica...`;

    telaInicio.classList.add("escondido");

    telaResultado.classList.add("escondido");

    telaJogo.classList.remove("escondido");

    mostrarPergunta();
}


// Mostra o resultado
function mostrarResultado() {

    telaJogo.classList.add("escondido");

    telaResultado.classList.remove("escondido");

    pontuacao.textContent = pontos;

    if (pontos === 8) {

        mensagemResultado.textContent =
            "📸 Incrível! Você acertou todas as perguntas!";

    } else if (pontos >= 5) {

        mensagemResultado.textContent =
            "💜 Muito bem! Você demonstrou bons conhecimentos sobre fotografia.";

    } else {

        mensagemResultado.textContent =
            "📷 Continue praticando! A fotografia é uma arte que se aprende com experiência.";

    }
}


// Eventos dos botões
btnIniciar.addEventListener("click", iniciarJogo);

btnJogarNovamente.addEventListener("click", iniciarJogo);
