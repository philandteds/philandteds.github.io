/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){
    jQuery('button.menu-bars').click(function(){
    if(jQuery('body').hasClass('toggleMenu')){
        jQuery('body').removeClass('toggleMenu')
    }else{
       jQuery('body').addClass('toggleMenu') 
    }
  });
})
console.log ('End of mobile_menu.js');
