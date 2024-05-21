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