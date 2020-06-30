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


// // API GOOGLE MAPS

// // Initialize and add the map
// function initMap() {
//   // The location of Kilimanjaro
//   const kili = {lat: -55.945, lng: -3.183};
//   // The map, centered at the coffee shop
//   const map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: kili});
//   // The marker, positioned at the coffee shop
//   var marker = new google.maps.Marker({position: kili, map: map});
// }

// initMap();
