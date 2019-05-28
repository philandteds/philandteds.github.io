/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){ 
        
    jQuery('button.menu-bars').click(function(event){
        if(jQuery('body').hasClass('toggleMenu')){
            jQuery('body').removeClass('toggleMenu')
        }else{
           jQuery('body').addClass('toggleMenu') 
        }
        event.preventDefault();
  });
})

setInterval(function(){ 
    
    if(jQuery("#header-nav").css("display")=="none"){
        jQuery('body').removeClass('toggleMenu')
    } 

}, 1000);

console.log ('End of mobile_menu.js');
