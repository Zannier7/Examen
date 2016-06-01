$(document).ready(function(){      
    var user="zannier".val;
    var pass = "123456".val;
    
    $("#enviar").click(function(){       
      
    if($("#usuario").val() == user & $("#pass").val() == 123456){          
           window.locattion = "template.html";                   
    }
    else{
        if($("#usuario").val() == ""){
                alert("Ingrese un usuario");   
        }        
        }
    
   }); 
});