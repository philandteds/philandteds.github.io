/* Use this JS file for the PT mobile menu scroll issue fix */
console.log ('Start of mobile_menu.js');
jQuery(document).ready(function(){
    
    jQuery('body').click(function(){
        alert(jQuery('body').hasClass('toggleMenu'));
        if(jQuery('body').hasClass('toggleMenu')){
            jQuery('body').removeClass('toggleMenu')
        }
    });
        
    jQuery('button.menu-bars').click(function(event){
        if(jQuery('body').hasClass('toggleMenu')){
            jQuery('body').removeClass('toggleMenu')
        }else{
           jQuery('body').addClass('toggleMenu') 
        }
        event.preventDefault();
  });
})
console.log ('End of mobile_menu.js');
