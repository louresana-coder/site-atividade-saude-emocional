// === MENU RESPONSIVO ===
const botaoMenu = document.getElementById('botaoMenu');
const listaMenu = document.getElementById('listaMenu');

if (botaoMenu && listaMenu) {
    botaoMenu.addEventListener('click', () => {
        listaMenu.classList.toggle('aberto');
    });
}

// === MODO ESCURO ===
const botaoModoEscuro = document.getElementById('botaoModoEscuro');

if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-escuro');
        const modo = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
        localStorage.setItem('modoVisual', modo);
    });

    if (localStorage.getItem('modoVisual') === 'escuro') {
        document.body.classList.add('modo-escuro');
    }
}

// === VOLTAR AO TOPO ===
const botaoTopo = document.getElementById('botaoTopo');
if (botaoTopo) {
    botaoTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === AUMENTAR FONTE ===
const botaoAumentarFonte = document.getElementById('botaoAumentarFonte');
let tamanhoFonte = 17;
if (botaoAumentarFonte) {
    botaoAumentarFonte.addEventListener('click', () => {
        tamanhoFonte += 2;
        document.body.style.fontSize = `${tamanhoFonte}px`;
    });
}

// === ESPAÇO DE ESCUTA ===
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
            Se o que sente for muito pesado, não hesite em ligar para o <strong>CVV — 188</strong> ou conversar com alguém de confiança. Alguém quer te ouvir.<br><br
