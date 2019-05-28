/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){
    jQuery('button.menu-bars').click(function(){
    jQuery('body').toggleClass('toggleMenu');
  });
   jQuery('body').click(function(){
     jQuery(this).removeClass('toggleMenu');
   });
})
console.log ('End of mobile_menu.js');
