$(document).ready(function(){
    $("#form1").submit(function()
    {
        var first=$('#fname').val();
        var last=$('#lname').val();
        var email=$('#email').val();
        var select=$('#selected').val();
        var suggest=$('#suggestion').val();
       
        if(first ==""){
            $('#error').html("*Please Enter Your First Name");
            return false;
        }
        else if(last ==""){
            $('#error1').html("*Please Enter Last Name");
            $('#error').html("");
            return false;
        }
        else if(email ==""){
            $('#error2').html("*Please Enter your E-mail");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else if(select ==""){
            $('#error3').html("*Please Select an Option");
            $('#error2').html("");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else if(suggest ==""){
            $('#error4').html("*Please fill this box");
            $('#error3').html("");
            $('#error2').html("");
            $('#error1').html("");
            $('#error').html("");
            return false;
        }
        else{
            return true;
        }
    });
});