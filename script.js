var label = document.getElementById("label");

label.onclick = function() {
    document.body.classList.toggle("dark-mode");
}


let cont = document.querySelector('.cont');
let ownLink = document.getElementById('own-link');
let own = document.querySelector('.own');
let stockLikn = document.getElementById('stock-link');
let stock = document.querySelector('.stock');

let back = document.querySelectorAll('.back-all');

let logo = document.querySelector('.logo');

ownLink.addEventListener('click', ()=> {
    cont.classList.add('none');
    own.classList.add('block');
    stock.classList.remove('block');
})

logo.addEventListener('click', ()=> {
    cont.classList.remove('none');
    own.classList.remove('block');
    stock.classList.remove('block');
})

back.forEach(function(back) {
    back.addEventListener('click', function() {
        cont.classList.remove('none');
        own.classList.remove('block');
        stock.classList.remove('block');
    })
})

stockLikn.addEventListener('click', ()=> {
    stock.classList.add('block');
    cont.classList.add('none');
    own.classList.remove('block');
})
