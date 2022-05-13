// function for sticky navbar
window.addEventListener('scroll', function(){
    const header = document.querySelector('.head');
    header.classList.toggle('sticky', window.scrollY > 0);
    console.log(scrollX,scrollY);
});


// function for toggle hamburger icon
const header = document.getElementById('head');
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

document.onclick = function(e){
    if(e.target.id !== 'head' && e.target.id !== 'toggle' && e.target.id !== 'nav'){
        toggle.classList.remove('ham');
        nav.classList.remove('reveal');    
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('ham');
    nav.classList.toggle('reveal');
}