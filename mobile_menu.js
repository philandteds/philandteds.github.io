/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
$(document).ready(function(){
    alert('On Ready');
    $('button.menu-bars').click(function(){
       alert('On Click');
    $('body.en-US').toggleClass('toggleMenu');
  });
})
console.log ('End of mobile_menu.js');
