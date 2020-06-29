const menuIcon = document.getElementById('menuToggle');
const container = document.querySelector('body');
const burgerMenu = document.getElementById('menu');
const checkbox = document.getElementById('input-burger');

menuIcon.addEventListener('click' , () => {
  container.classList.toggle('menu-open');
});


document.addEventListener('click', (e) => {
    console.log(e);
    
    if(e.target !== checkbox && e.target !== burgerMenu){
        checkbox.checked = false;
        container.classList.remove('menu-open');
    }
})