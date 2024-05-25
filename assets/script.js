// NAVBAR

var ul = document.querySelector('.nav-list ul');
var menuBtn = document.querySelector('.menu-btn i');
var links = document.querySelectorAll('.nav-list .nave');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

links.forEach(function (link) {
    link.addEventListener('click', function () {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }
    });
});

// MUDAR TEMA

var color = "dark";

function mudarTema() {
    document.body.classList.toggle(color);
    
    if (document.body.classList.contains(color)) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function loadPage() {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark') {
        document.body.classList.add(color);
    } else {
        document.body.classList.remove(color);
    }
}

loadPage();