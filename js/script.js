// === 1. MENU RESPONSIVO ===
const btnMenu = document.getElementById('btnMenu');
const listaMenu = document.getElementById('listaMenu');

if (btnMenu && listaMenu) {
    btnMenu.addEventListener('click', () => {
        listaMenu.classList.toggle('aberto');
    });
}

// === 2. MODO ESCURO ===
const btnModoEscuro = document.getElementById('btnModoEscuro');

if (btnModoEscuro) {
    btnModoEscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-escuro');
        // Salva preferência no navegador
        const modo = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
        localStorage.setItem('modoVisual', modo);
    });

    // Carrega preferência salva
    if (localStorage.getItem('modoVisual') === 'escuro') {
        document.body.classList.add('modo-escuro');
    }
}

// === 3. VOLTAR AO TOPO ===
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === 4. AUMENTAR FONTE ===
const btnAumentarFonte = document.getElementById('btnAumentarFonte');
let tamanhoBase = 16;

if (btnAumentarFonte) {
    btnAumentarFonte.addEventListener('click', () => {
        tamanhoBase += 2;
        document.body.style.fontSize = `${tamanhoBase}px`;
    });
}

// === 5. PORTAL DE ESCUTA ===
const formEscuta = document.getElementById('formEscuta');
const respostaEscuta = document.getElementById('respostaEscuta');

if (formEscuta && respostaEscuta) {
    formEscuta.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nomeEscuta').value || 'Estudante';

        respostaEscuta.innerHTML = `
            💛 Olá, ${nome}! Que bom que você compartilhou o que sente.<br><br>
            Sua mensagem foi recebida com muito carinho. Lembre-se: seus sentimentos são importantes e você não precisa passar por isso sozinho(a).<br><br>
            Respire fundo. Um dia de cada vez. Você é forte e merece estar bem! 💚
        `;
        respostaEscuta.classList.add('visivel');
        formEscuta.reset();
    });
}

// === 6. QUIZ ===
const formQuiz = document.getElementById('formQuiz');
const resultadoQuiz = document.getElementById('resultadoQuiz');

if (formQuiz && resultadoQuiz) {
    formQuiz.addEventListener('submit', (e) => {
        e.preventDefault();
        let acertos = 0;

        // Respostas corretas
        const respostasCertas = {
            q1: 'certo',
            q2: 'certo',
            q3: 'certo',
            q4: 'certo',
            q5: 'certo'
        };

        // Verifica cada pergunta
        for (let i = 1; i <= 5; i++) {
            const resposta = document.querySelector(`input[name="q${i}"]:checked`);
            if (resposta && resposta.value === respostasCertas[`q${i}`]) {
                acertos++;
            }
        }

        // Mensagem de resultado
        let mensagem = '';
        if (acertos === 5) {
            mensagem = `🎉 Parabéns! Você acertou as 5 perguntas! Conhece muito sobre saúde emocional!`;
        } else if (acertos >= 3) {
            mensagem = `✅ Você acertou ${acertos} de 5 perguntas! Muito bem! Continue cuidando de você!`;
        } else {
            mensagem = `📚 Você acertou ${acertos} de 5 perguntas. Leia as informações com atenção e refleta sobre o tema!`;
        }

        resultadoQuiz.innerHTML = mensagem;
        resultadoQuiz.classList.add('visivel');
    });
}
