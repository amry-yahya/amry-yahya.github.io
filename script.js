let navs = [...document.querySelectorAll('.nav-link')];
let contents=[...document.querySelectorAll('.content')];
navs.map(nav => nav.addEventListener('click', move));

function move(){
    navs.map(nav=>nav.classList.remove('active'));
    contents.map(content=>content.classList.add("d-none"));
    active_content=document.querySelector(`.${this.id}`);
    console.log(active_content);
    active_content.classList.remove("d-none");
    this.classList.add('active');
}

