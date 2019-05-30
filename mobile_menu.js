/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){ 
        
    jQuery('button.menu-bars').click(function(event){
        if(jQuery('html').hasClass('toggleMenu')){
            jQuery('html').removeClass('toggleMenu')
        }else{
           jQuery('html').addClass('toggleMenu') 
        }
        event.preventDefault();
  });
})

setInterval(function(){ 
    
    if(jQuery("#header-nav").css("display")=="none"){
        jQuery('html').removeClass('toggleMenu')
    } 

}, 100);

console.log ('End of mobile_menu.js');
jQuery(document).ready(function(){ 
jQuery('body').bind('touchmove', function(e){e.preventDefault()}); 
 });

