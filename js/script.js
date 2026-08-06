// === MENU RESPONSIVO ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('aberto');
    });
}

// === MODO ESCURO ===
const btnModoEscuro = document.getElementById('btnModoEscuro');

if (btnModoEscuro) {
    btnModoEscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-escuro');
        const modo = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
        localStorage.setItem('modoVisual', modo);
    });

    if (localStorage.getItem('modoVisual') === 'escuro') {
        document.body.classList.add('modo-escuro');
    }
}

// === VOLTAR AO TOPO ===
const btnTopo = document.getElementById('btnTopo');
if (btnTopo) {
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === AUMENTAR FONTE ===
const btnAumentarFonte = document.getElementById('btnAumentarFonte');
let tamanhoFonte = 17;
if (btnAumentarFonte) {
    btnAumentarFonte.addEventListener('click', () => {
        tamanhoFonte += 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    });
}

// === ESPAÇO DE ESCUTA ===
const formEscuta = document.getElementById('formEscuta');
const respostaEscuta = document.getElementById('respostaEscuta');

if (formEscuta && respostaEscuta) {
    formEscuta.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nomeEscuta').value || 'Estudante';

        respostaEscuta.innerHTML = `
            💛 Olá, ${nome}!<br><br>
            Que bom que você se permitiu falar o que sente. Sua mensagem foi recebida com muito carinho.<br><br>
            Lembre-se: você não precisa carregar tudo sozinho(a). Sentir é humano. Pedir ajuda é coragem. E você é importante! 💚<br><br>
            Respire. Um dia de cada vez. Você está fazendo o seu melhor.
        `;
        respostaEscuta.classList.add('visivel');
        formEscuta.reset();
    });
}

// === QUIZ ===
const formQuiz = document.getElementById('formQuiz');
const resultadoQuiz = document.getElementById('resultadoQuiz');

if (formQuiz && resultadoQuiz) {
    formQuiz.addEventListener('submit', (e) => {
        e.preventDefault();
        let acertos = 0;
        const respostasCertas = { q1: 'certo', q2: 'certo', q3: 'certo', q4: 'certo', q5: 'certo' };

        for (let i = 1; i <= 5; i++) {
            const resposta = document.querySelector(`input[name="q${i}"]:checked`);
            if (resposta && resposta.value === respostasCertas[`q${i}`]) {
                acertos++;
            }
        }

        let mensagem = '';
        if (acertos === 5) {
            mensagem = `🎉 Parabéns! Você acertou TODAS as 5 perguntas! Cuide muito bem de você!`;
        } else if (acertos >= 3) {
            mensagem = `✅ Você acertou ${acertos} de 5 perguntas! Muito bem! Continue aprendendo e cuidando!`;
        } else {
            mensagem = `🌱 Você acertou ${acertos} de 5 perguntas. Leia com atenção e refleta sobre o tema!`;
        }

        resultadoQuiz.innerHTML = mensagem;
        resultadoQuiz.classList.add('visivel');
    });
}
