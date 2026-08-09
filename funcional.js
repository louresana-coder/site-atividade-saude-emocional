/* =====================================================
   🌿 PORTAL DE SAÚDE EMOCIONAL
   JavaScript principal do site
===================================================== */


/* =====================================================
   📱 MENU RESPONSIVO
===================================================== */

const botaoMenu = document.getElementById("menuToggle");
const listaMenu = document.getElementById("menu");

if (botaoMenu && listaMenu) {

    botaoMenu.addEventListener("click", () => {
        listaMenu.classList.toggle("aberto");
    });

}


/* =====================================================
   🌙 MODO ESCURO
===================================================== */

const botaoModoEscuro = document.getElementById("botaoModoEscuro");

if (botaoModoEscuro) {

    // Verifica se o usuário já escolheu o modo escuro
    if (localStorage.getItem("modoEscuro") === "ativo") {
        document.body.classList.add("modo-escuro");
        botaoModoEscuro.textContent = "☀️";
    }

    botaoModoEscuro.addEventListener("click", () => {

        document.body.classList.toggle("modo-escuro");

        if (document.body.classList.contains("modo-escuro")) {

            localStorage.setItem("modoEscuro", "ativo");
            botaoModoEscuro.textContent = "☀️";

        } else {

            localStorage.setItem("modoEscuro", "desativado");
            botaoModoEscuro.textContent = "🌙";

        }

    });

}


/* =====================================================
   🔤 AUMENTAR FONTE
===================================================== */

const botaoAumentarFonte =
    document.getElementById("botaoAumentarFonte");

let fonteAumentada = false;

if (botaoAumentarFonte) {

    botaoAumentarFonte.addEventListener("click", () => {

        fonteAumentada = !fonteAumentada;

        if (fonteAumentada) {

            document.body.classList.add("fonte-aumentada");

        } else {

            document.body.classList.remove("fonte-aumentada");

        }

    });

}


/* =====================================================
   ⬆️ VOLTAR AO TOPO
===================================================== */

const botaoTopo = document.getElementById("botaoTopo");

if (botaoTopo) {

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   💬 ESPAÇO DE ESCUTA
===================================================== */

const formularioEscuta =
    document.getElementById("formularioEscuta");

const respostaAutomatica =
    document.getElementById("respostaAutomatica");

if (formularioEscuta && respostaAutomatica) {

    formularioEscuta.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome =
            document.getElementById("nomeUsuario").value.trim();

        if (!nome) {
            return;
        }

        respostaAutomatica.innerHTML = `
            <h3>💚 Obrigado por compartilhar, ${nome}.</h3>

            <p>
                Suas palavras são importantes.
                Colocar em palavras aquilo que sentimos pode
                ser um primeiro passo para compreender melhor
                nossas emoções.
            </p>

            <p>
                Lembre-se: você não precisa enfrentar tudo sozinho(a).
                Procure alguém de confiança quando precisar.
            </p>

            <p class="frase-motivacional">
                🌿 "Cuidar das emoções também é uma forma de cuidar de si."
            </p>
        `;

        respostaAutomatica.classList.add("mostrar");

        formularioEscuta.reset();

    });

}


/* =====================================================
   🌿 FRASES MOTIVACIONAIS
===================================================== */

const fraseMotivacional =
    document.getElementById("fraseMotivacional");

const novaFrase =
    document.getElementById("novaFrase");

const frases = [

    "💚 Você não precisa estar bem o tempo todo.",

    "🌿 Pedir ajuda também é uma forma de coragem.",

    "🤝 Você merece ser ouvido e respeitado.",

    "💛 Seus sentimentos são importantes.",

    "🌱 Pequenos passos também são progresso.",

    "🫶 Falar sobre o que sentimos pode tornar o caminho mais leve.",

    "☀️ Cuide de você com a mesma gentileza que oferece aos outros."

];

let indiceFrase = 0;

function mostrarFrase() {

    if (fraseMotivacional) {

        fraseMotivacional.textContent =
            frases[indiceFrase];

    }

}

if (fraseMotivacional) {
    mostrarFrase();
}

if (novaFrase) {

    novaFrase.addEventListener("click", () => {

        indiceFrase++;

        if (indiceFrase >= frases.length) {
            indiceFrase = 0;
        }

        mostrarFrase();

    });

}


/* =====================================================
   🧠 QUIZ DE SAÚDE EMOCIONAL
===================================================== */

const quizCard =
    document.getElementById("quizCard");

if (quizCard) {

    const perguntas = [

        {
            pergunta: "O que significa ter saúde emocional?",

            opcoes: [
                "Nunca sentir tristeza, medo ou ansiedade.",
                "Reconhecer, aceitar e aprender a lidar com os sentimentos.",
                "Estar sempre feliz e não demonstrar emoções negativas."
            ],

            correta: 1,

            explicacao:
                "Saúde emocional não significa estar feliz o tempo todo. Significa reconhecer as emoções e aprender a lidar com elas."
        },


        {
            pergunta:
                "Quando estamos nos sentindo sobrecarregados, qual atitude pode ajudar?",

            opcoes: [
                "Ignorar os sentimentos e continuar fazendo tudo normalmente.",
                "Guardar tudo para si.",
                "Parar, respirar, descansar e procurar apoio quando necessário."
            ],

            correta: 2,

            explicacao:
                "Reconhecer nossos limites, descansar e conversar com alguém de confiança pode ajudar quando estamos sobrecarregados."
        },


        {
            pergunta:
                "Sobre falar dos nossos sentimentos, podemos dizer que:",

            opcoes: [
                "Falar sobre eles pode ajudar a compreender melhor o que estamos sentindo.",
                "Devemos esconder nossos sentimentos para não preocupar ninguém.",
                "Só devemos falar quando o problema já estiver muito grave."
            ],

            correta: 0,

            explicacao:
                "Conversar sobre sentimentos com pessoas de confiança pode ajudar a organizar pensamentos e buscar apoio."
        },


        {
            pergunta:
                "Qual destas atitudes contribui para o bem-estar emocional?",

            opcoes: [
                "Ignorar os próprios limites.",
                "Respeitar seus limites e cuidar de si.",
                "Comparar constantemente sua vida com a de outras pessoas."
            ],

            correta: 1,

            explicacao:
                "Respeitar limites, descansar e cuidar de si são atitudes importantes para o bem-estar emocional."
        },


        {
            pergunta:
                "Pedir ajuda quando precisamos é:",

            opcoes: [
                "Um sinal de fraqueza.",
                "Algo que devemos evitar.",
                "Um ato de coragem e uma forma de cuidar de nós mesmos."
            ],

            correta: 2,

            explicacao:
                "Ninguém precisa enfrentar tudo sozinho. Pedir ajuda demonstra que reconhecemos nossas necessidades e buscamos apoio."
        }

    ];


    /* =========================
       ELEMENTOS DO QUIZ
    ========================== */

    const numeroPergunta =
        document.getElementById("numeroPergunta");

    const pontuacaoAtual =
        document.getElementById("pontuacaoAtual");

    const progressoQuiz =
        document.getElementById("progressoQuiz");

    const textoPergunta =
        document.getElementById("textoPergunta");

    const opcoesQuiz =
        document.getElementById("opcoesQuiz");

    const feedbackQuiz =
        document.getElementById("feedbackQuiz");

    const proximaPergunta =
        document.getElementById("proximaPergunta");

    const resultadoQuiz =
        document.getElementById("resultadoQuiz");

    const pontuacaoFinal =
        document.getElementById("pontuacaoFinal");

    const mensagemResultado =
        document.getElementById("mensagemResultado");

    const refazerQuiz =
        document.getElementById("refazerQuiz");


    /* =========================
       VARIÁVEIS
    ========================== */

    let perguntaAtual = 0;
    let pontuacao = 0;
    let respondeu = false;


    /* =========================
       MOSTRAR PERGUNTA
    ========================== */

    function mostrarPergunta() {

        respondeu = false;

        const pergunta =
            perguntas[perguntaAtual];

        numeroPergunta.textContent =
            perguntaAtual + 1;

        pontuacaoAtual.textContent =
            pontuacao;

        textoPergunta.textContent =
            pergunta.pergunta;

        progressoQuiz.style.width =
            ((perguntaAtual + 1) / perguntas.length) * 100 + "%";

        opcoesQuiz.innerHTML = "";

        feedbackQuiz.innerHTML = "";

        feedbackQuiz.classList.remove("mostrar");

        proximaPergunta.style.display =
            "none";


        pergunta.opcoes.forEach((opcao, indice) => {

            const botao =
                document.createElement("button");

            botao.className =
                "quiz-opcao";

            botao.textContent =
                opcao;

            botao.type =
                "button";

            botao.addEventListener("click", () => {

                verificarResposta(indice, botao);

            });

            opcoesQuiz.appendChild(botao);

        });

    }


    /* =========================
       VERIFICAR RESPOSTA
    ========================== */

    function verificarResposta(indiceEscolhido, botaoEscolhido) {

        if (respondeu) {
            return;
        }

        respondeu = true;

        const pergunta =
            perguntas[perguntaAtual];

        const botoes =
            document.querySelectorAll(".quiz-opcao");


        botoes.forEach((botao, indice) => {

            botao.disabled = true;

            if (indice === pergunta.correta) {

                botao.classList.add("correta");

            }

        });


        if (indiceEscolhido === pergunta.correta) {

            pontuacao++;

            botaoEscolhido.classList.add("correta");

            feedbackQuiz.innerHTML = `
                <strong>✅ Muito bem!</strong>
                <p>${pergunta.explicacao}</p>
            `;

        } else {

            botaoEscolhido.classList.add("errada");

            feedbackQuiz.innerHTML = `
                <strong>💡 Quase!</strong>
                <p>${pergunta.explicacao}</p>
            `;

        }


        feedbackQuiz.classList.add("mostrar");

        pontuacaoAtual.textContent =
            pontuacao;

        proximaPergunta.style.display =
            "block";

        if (perguntaAtual === perguntas.length - 1) {

            proximaPergunta.textContent =
                "🏆 Ver meu resultado";

        } else {

            proximaPergunta.textContent =
                "Próxima pergunta →";

        }

    }


    /* =========================
       PRÓXIMA PERGUNTA
    ========================== */

    proximaPergunta.addEventListener("click", () => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

            window.scrollTo({
                top: quizCard.offsetTop - 100,
                behavior: "smooth"
            });

        } else {

            mostrarResultado();

        }

    });


    /* =========================
       RESULTADO
    ========================== */

    function mostrarResultado() {

        quizCard.style.display =
            "none";

        resultadoQuiz.classList.add("mostrar");

        pontuacaoFinal.textContent =
            pontuacao;


        if (pontuacao === 5) {

            mensagemResultado.textContent =
                "🌟 Excelente! Você demonstrou um ótimo conhecimento sobre saúde emocional.";

        } else if (pontuacao >= 3) {

            mensagemResultado.textContent =
                "💚 Muito bem! Você já conhece vários aspectos importantes sobre saúde emocional.";

        } else {

            mensagemResultado.textContent =
                "🌿 Continue aprendendo! Conhecer melhor nossas emoções é um passo importante para cuidar de nós mesmos.";

        }


        window.scrollTo({
            top: resultadoQuiz.offsetTop - 100,
            behavior: "smooth"
        });

    }


    /* =========================
       REFAZER QUIZ
    ========================== */

    if (refazerQuiz) {

        refazerQuiz.addEventListener("click", () => {

            perguntaAtual = 0;

            pontuacao = 0;

            resultadoQuiz.classList.remove("mostrar");

            quizCard.style.display =
                "block";

            mostrarPergunta();

            window.scrollTo({
                top: quizCard.offsetTop - 100,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       INICIAR QUIZ
    ========================== */

    mostrarPergunta();

}


/* =====================================================
   ✨ EFEITO SUAVE AO CARREGAR A PÁGINA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("pagina-carregada");

});
