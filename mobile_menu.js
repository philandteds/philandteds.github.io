/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){
    alert('On Ready');
    jQuery('button.menu-bars').click(function(){
       alert('On Click');
    jQuery('body.en-US').toggleClass('toggleMenu');
  });
})
console.log ('End of mobile_menu.js');
