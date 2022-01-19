let navs=[...document.querySelectorAll('.nav-link')];
let sections=[...document.querySelectorAll('section')];
navs.map(nav=>change(nav));

function change(nav) {
    nav.addEventListener('click', activating);
}

function activating() {
    navs.map(nav=>nav.classList.remove('active'));
    sections.map(section=>section.classList.add('d-none'));
    let active_section=document.querySelector(`#${this.dataset.link}`);
    active_section.classList.remove('d-none');
    this.classList.add('active');
}
