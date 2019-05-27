/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
$(document).ready(function(){
    $('button.menu-bars').click(function(){
    alert('hi');
    $(body).toggleClass('toggleMenu');
  });
})
console.log ('End of mobile_menu.js');
