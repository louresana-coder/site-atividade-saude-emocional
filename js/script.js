// ==============================================
// 🌿 PORTAL SAÚDE EMOCIONAL — Ana Laura
// Funcionalidades completas
// ==============================================

// === 1. MENU RESPONSIVO ===
const botaoMenu = document.getElementById('botaoMenu');
const listaMenu = document.getElementById('listaMenu');

if (botaoMenu && listaMenu) {
    botaoMenu.addEventListener('click', () => {
        listaMenu.classList.toggle('aberto');
    });
}

// === 2. MODO ESCURO (salva preferência) ===
const botaoModoEscuro = document.getElementById('botaoModoEscuro');

if (botaoModoEscuro) {
    // Carrega preferência salva
    if (localStorage.getItem('modoVisual') === 'escuro') {
        document.body.classList.add('modo-escuro');
    }

    botaoModoEscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-escuro');
        const modo = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
        localStorage.setItem('modoVisual', modo);
    });
}

// === 3. VOLTAR AO TOPO (suave) ===
const botaoTopo = document.getElementById('botaoTopo');

if (botaoTopo) {
    botaoTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === 4. AUMENTAR FONTE ===
const botaoAumentarFonte = document.getElementById('botaoAumentarFonte');
let tamanhoFonte = 17;

if (botaoAumentarFonte) {
    botaoAumentarFonte.addEventListener('click', () => {
        tamanhoFonte += 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    });
}

// === 5. ESPAÇO DE ESCUTA — Mensagem Automática ===
const formularioEscuta = document.getElementById('formularioEscuta');
const respostaAutomatica = document.getElementById('respostaAutomatica');

if (formularioEscuta && respostaAutomatica) {
    formularioEscuta.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nomeUsuario').value || 'Estudante';

        respostaAutomatica.innerHTML = `
            💛 Olá, ${nome}!<br><br>
            Obrigada por confiar em nós e compartilhar o que sente. Sua mensagem foi recebida com muito carinho e respeito.<br><br>
            Lembre-se: você não precisa carregar tudo sozinho(a). Sentir é humano. Pedir ajuda é coragem. E você é muito importante! 💚<br><br>
            Se o que sente for muito pesado, não hesite em ligar para o <strong>CVV — 188</strong> ou conversar com alguém de confiança. Alguém quer te ouvir.<br><br>
            Respire fundo. Um dia de cada vez. Você está fazendo o seu melhor. 💚
        `;
        respostaAutomatica.classList.add('mostrar');
        formularioEscuta.reset();
    });
}

// === 6. FRASES MOTIVACIONAIS ALEATÓRIAS ===
const frases = [
    "✅ Sentir demais não é defeito — é ser humano. Seus sentimentos têm valor.",
    "✅ Você não precisa estar bem o tempo todo. Descansar é permitido e necessário.",
    "✅ Pedir ajuda é coragem, não é fraqueza. Quem pede ajuda se cuida com sabedoria.",
    "✅ Seus sentimentos importam. Você importa. Não se diminua por ninguém.",
    "✅ Um dia de cada vez. Respire. Você está fazendo o seu melhor, e isso é suficiente.",
    "✅ Sempre há alguém que se importa. Não tenha vergonha de buscar apoio.",
    "✅ Tudo bem não ter todas as respostas agora. O tempo e o cuidado ajudam."
];

const fraseMotivacional = document.getElementById('fraseMotivacional');
const botaoNovaFrase = document.getElementById('novaFrase');

function mostrarFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    fraseMotivacional.textContent = frases[indice];
}

if (fraseMotivacional) {
    mostrarFraseAleatoria();
}

if (botaoNovaFrase) {
    botaoNovaFrase.addEventListener('click', mostrarFraseAleatoria);
}

// === 7. QUIZ INTERATIVO — Correção e Pontuação ===
const formularioQuiz = document.getElementById('formularioQuiz');
const resultadoQuiz = document.getElementById('resultadoQuiz');

if (formularioQuiz && resultadoQuiz) {
    formularioQuiz.addEventListener('submit', (e) => {
        e.preventDefault();
        let acertos = 0;

        // Respostas corretas
        const respostasCertas = {
            p1: 'certo',
            p2: 'certo',
            p3: 'certo',
            p4: 'certo',
            p5: 'certo'
        };

        // Verifica cada pergunta
        for (let i = 1; i <= 5; i++) {
            const resposta = document.querySelector(`input[name="p${i}"]:checked`);
            if (resposta && resposta.value === respostasCertas[`p${i}`]) {
                acertos++;
            }
        }

        // Mensagem personalizada conforme pontuação
        let mensagem = '';
        if (acertos === 5) {
            mensagem = `🎉 Parabéns! Você acertou TODAS as 5 perguntas!<br><br>
            Você demonstra um excelente conhecimento sobre saúde emocional! Continue cuidando de si e espalhando essa sabedoria! 💚`;
        } else if (acertos >= 3) {
            mensagem = `✅ Você acertou ${acertos} de 5 perguntas! Muito bem!<br><br>
            Já sabe bastante sobre o tema! Revise as questões que errou e continue aprendendo. Cuide sempre de você! 💚`;
        } else {
            mensagem = `🌱 Você acertou ${acertos} de 5 perguntas.<br><br>
            Tudo bem! Leia com atenção as informações do site, reflita e tente novamente. Conhecimento se constrói aos poucos! 💚`;
        }

        resultadoQuiz.innerHTML = mensagem;
        resultadoQuiz.classList.add('mostrar');
    });
}
