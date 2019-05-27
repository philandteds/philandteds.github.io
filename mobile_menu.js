/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
$('button.menu-bars').click(function(){
  $(body).toggleClass('toggleMenu');
});
console.log ('End of mobile_menu.js');
