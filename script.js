/* =====================================================
   SAÚDE EMOCIONAL
   SCRIPT.JS
   ===================================================== */


/* ==================== MENU MOBILE ==================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute(
                "aria-label",
                "Fechar menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }

    });


    /* Fecha o menu quando clicar em algum link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

}


/* ==================== MODO ESCURO ==================== */

const themeToggle = document.getElementById("theme-toggle");


function atualizarIconeTema() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        themeToggle.setAttribute(
            "aria-label",
            "Desativar modo escuro"
        );

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

    }
}


/* Verifica se o usuário já escolheu um tema */

const temaSalvo = localStorage.getItem("tema-saude-emocional");

if (temaSalvo === "escuro") {

    document.body.classList.add("dark-mode");

}

atualizarIconeTema();


/* Botão de mudar o tema */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem(
                "tema-saude-emocional",
                "escuro"
            );

        } else {

            localStorage.setItem(
                "tema-saude-emocional",
                "claro"
            );

        }

        atualizarIconeTema();

    });

}


/* ==================== FECHAR MENU AO REDIMENSIONAR ==================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }

    }

});


/* ==================== ANIMAÇÃO AO APARECER ==================== */

const elementosAnimados = document.querySelectorAll(
    ".info-card, .care-card, .quote-box, .support-section, .quiz-preview"
);


const observador = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

                observador.unobserve(elemento.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


elementosAnimados.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(20px)";
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});


/* ==================== ANO AUTOMÁTICO ==================== */

const ano = new Date().getFullYear();

const elementoAno = document.querySelector(
    ".footer-bottom p"
);

if (elementoAno) {

    elementoAno.textContent =
        `© ${ano} — Projeto de Saúde Emocional`;

}