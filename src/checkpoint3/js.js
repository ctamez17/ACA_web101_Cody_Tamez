    
var totCookies = 0;

$(document).ready(function(){
    
    $("#cookieFunction").on('click',function(){
      totCookies += 1;
    });
     
    $("#cuteCookie").draggable();