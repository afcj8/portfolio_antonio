var ul = document.querySelector('.nav-list ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

var links = document.querySelectorAll('.nav-list .nave');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }
    });
});

var color = "dark";

function mudarTema() {
    // Alterna a classe do body
    document.body.classList.toggle(color);
    
    // Armazena o estado atual do tema no localStorage
    if (document.body.classList.contains(color)) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function loadPage() {
    // Recupera o tema armazenado no localStorage
    const storedTheme = localStorage.getItem('theme');
    
    // Aplica o tema armazenado ao carregar a página
    if (storedTheme === 'dark') {
        document.body.classList.add(color);
    } else {
        document.body.classList.remove(color);
    }
}

// Chama a função para carregar o tema ao carregar a página
loadPage();
