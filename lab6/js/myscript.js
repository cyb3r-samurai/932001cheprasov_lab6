let b1 = document.querySelector('#left');
let i1 = document.querySelector('#leftcontent img');
let i2 = document.querySelector('#rightcontent img');
let contentl = document.getElementById('leftcontent');
let contentr = document.getElementById('rightcontent');
b1.onclick = function(){
    contentl.style.width = '95%' ;
    contentr.style.width = '5%';
    i1.style.width = '70%';
    i1.style.display = 'block';
    i2.style.display = 'none';
};
let b2 = document.querySelector('#center');
b2.onclick = function(){
    contentl.style.width = '50%' ;
    contentr.style.width = '50%';
    i1.style.width = '90%';
    i1.style.display = 'block';
    i2.style.display = 'block';
    i2.style.width = '90%';
};
let b3 = document.querySelector('#right');
b3.onclick = function(){
    contentl.style.width = '5%' ;
    contentr.style.width = '95%';
    i1.style.display = 'none';
    i2.style.display = 'block';
    i2.style.width = '70%';
};
