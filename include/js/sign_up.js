//  Verificador de Login  \\
$(function(){

    var mayus       =       new RegExp("^(?=.*[A-Z])");
    var special     =       new RegExp("^(?=.*[!@#$&*])");
    var numbers     =       new RegExp("^(?=.*[0-9])");
    var lower       =       new RegExp("^(?=.*[a-z])");
    var len         =       new RegExp("^(?=.{8,})");

    $("#inputPassword").on("keyup", function(){
    var password = $("#inputPassword").val(); 
    if(mayus.test(password) && special.test(password) && numbers.test(password) && lower.test(password) && len.test(password)){
        $("#mensaje").text("Segura").css("color", "green");
    }
    else{
        $("#mensaje").text("No Segura").css("color", "red");
    }

    });

});