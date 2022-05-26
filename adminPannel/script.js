console.log("this is Balram");
let list = document.querySelectorAll('.navigator li');

let navigator =  document.querySelector('.navigator');
let toggle = document.querySelector('.toggle');
let main = document.querySelector('.main');


toggle.onclick = function(){
    navigator.classList.toggle('active');
    main.classList.toggle('active');
}

function activelink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) => {
    item.addEventListener('mouseover',activelink)
})
