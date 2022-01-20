let navs = [...document.querySelectorAll('.nav-link')];
let sections = [...document.querySelectorAll('section')];
let first_section = document.location.href.split('#')[1];
navs.map(nav => change(nav));

starting(first_section);

function starting(first_section) {
    let current_section=document.querySelector(`[data-link=${first_section}]`)
    current_section.click();
}

function change(nav) {
    nav.addEventListener('click', activating);
}

function activating() {
    navs.map(nav => nav.classList.remove('active'));
    sections.map(section => section.classList.add('d-none'));
    let active_section = document.querySelector(`#${this.dataset.link}`);
    active_section.classList.remove('d-none');
    this.classList.add('active');
}
