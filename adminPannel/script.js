console.log("this is Balram");
let list = document.querySelectorAll('.navigator li');

let navigator =  document.querySelector('.navigator');
let toggle = document.querySelector('.toggle');
let main = document.querySelector('.main');


toggle.onclick = function(){
    navigator.classList.add('active');
    main.classList.add('active');
}

function activelink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) => {
    item.addEventListener('mouseover',activelink)
})
