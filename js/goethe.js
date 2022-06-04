var Login = document.getElementById("ShowLoginform");
var Register = document.getElementById("Register");
var User = document.getElementById("UserName");
var Password = document.getElementById("password");
var passwordConf = document.getElementById("passwordConf");
var Loginpassword = document.getElementById("Loginpassword");
var email = document.getElementById("email");
var Loginuser = document.getElementById("Loginuser");
var userres = /^[a-zA-z0-9]+$/;
        var strongRegex = new RegExp("^(?=.{8,})");
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;





function checkemail(){
       
        
         if(email.value.match(emailExp)){
      
        
        document.getElementById("mail").innerHTML = "valid Email address";
        document.getElementById("mail").style.color = "green";
        document.getElementById("email").style.color = "green";
    } else{
       
        document.getElementById("mail").innerHTML = "in valid Email address";
        document.getElementById("mail").style.color = "red";
    }
}
// Validate Password input
function checkPass(){
        var strongRegex = new RegExp("^(?=.{8,})");
        Password = document.getElementById("password");
        var PasswordConf = document.getElementById("passwordConf");
        if(Password.value.match(strongRegex)){
        document.getElementById("pass").innerHTML = "Valid password";
        document.getElementById("pass").style.color="green";

        return false;
        Password.focus();
        Password.value = Password;
        //document.getElementById("mail").innerHTML = "hh";

        }else{
        //alert(DisplayMsg)
        document.getElementById("pass").innerHTML = "Characters must not be less than eight";
        document.getElementById("pass").style.color = "red";
        return false;
        PassIdId.focus();
        PassIdId.value = "";
        }
}

// Validate Password Configuration
function ValidatePass(){
   
        var getfirstname = document.getElementById("firstname")
        var Password = document.getElementById("password");
        var PasswordConf = document.getElementById("passwordConf");

        if(Password.value == PasswordConf.value){

        document.getElementById("passConf").innerHTML = "Password Matched";
        document.getElementById("passConf").style.color="green";

        }else{
        //alert(DisplayMsg)
        document.getElementById("passConf").innerHTML = "Password Mis-matched";
        document.getElementById("passConf").style.color = "red";
        return false;
        PasswordConf.focus();
        Password.value = "";
        }
}

//Validate User

/*function ValidateUser(){
    console.log(user.value);
}*/



// A functions that checks input Tag while you are still writing; 
function checkfirstnames(){
        var firstnameId = document.getElementById("firstname");
        var alphaExp = /^[a-zA-Z]+$/;
        if(firstnameId.value.match(alphaExp)){
           document.getElementById("pas").innerHTML= "correct";
             document.getElementById("pas").style.color="green";
              document.getElementById("firstname").style.border="1px solid green";
               document.getElementById("firstname").style.color="green";


        }else{
        document.getElementById("pas").innerHTML = "incorrect";
        document.getElementById("pas").style.color="red";
        document.getElementById("firstname").style.borderTop="1px solid red";
        document.getElementById("firstname").style.color="red";
        }

}
function checkEmail(emailId){
        var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if(emailId.value.match(emailExp)){
        document.getElementById("mail").innerHTML = "valid Email address"
        document.getElementById("mail").style.color="green";
        document.getElementById("email").style.color="green";
        }else{
        document.getElementById("mail").innerHTML = "Email is not valid"
        document.getElementById("mail").style.color="red";
        document.getElementById("email").style.color="red";
        }
    
}

function OnclickReg(){
        var getemail = document.getElementById("email");
        var getfirstname = document.getElementById("firstname")
        var Password = document.getElementById("password");
        var PasswordConf = document.getElementById("passwordConf");

        if(getemail.value, Password.value, PasswordConf.value == ""){
             alert("Fill in empty Form Input");
           
        }
    else if(Password.value !== PasswordConf.value){
        alert("incorrect password")
    }else{
            
            console.log(getemail);
        Login.style.display="block";
          Register.style.display="none";
            
          
        
        }
}

function checkUser(){
    if(User.value !== Loginuser.value){
        document.getElementById("UserLoginErrormsg").innerHTML = "Username is not valid"
        document.getElementById("UserLoginErrormsg").style.color="red";
       
    }else{
        document.getElementById("UserLoginErrormsg").innerHTML = "Correct Username"
        document.getElementById("UserLoginErrormsg").style.color="green";
    }
    
}

function CheckloginPass(){
    if(Password.value == Loginpassword.value){
        document.getElementById("Loginpass").innerHTML = "Correct Password";
        document.getElementById("Loginpass").style.color = "green";
       
    }else{
        
        document.getElementById("Loginpass").innerHTML = "in Correct Password";
        document.getElementById("Loginpass").style.color = "red";
        document.getElementById("UserLoginErrormsg").innerHTML = "Correct Username";
        document.getElementById("UserLoginErrormsg").style.color="green";
    }
    
}

function CheckloginPassConf(){
    if(Loginpassword.value !== LoginpasswordConf.value){
        document.getElementById("LoginpassConf").innerHTML = "Password mismatched!"
        document.getElementById("LoginpassConf").style.color="red";
       
    }else{
        document.getElementById("LoginpassConf").innerHTML = "Password matched";        document.getElementById("LoginpassConf").style.color = "green";
    }
    
}
function ShowLoginform(){
    var Login = document.getElementById("ShowLoginform");
    //var myself = document.getElementById("Myself");
    Login.style.display="block";
    //myself.style.display="none";
    var getid = document.getElementById("defaultGroupExample3").value
    if(getid == "someoneelse"){
        document.getElementById("someone").style.display="block";
         document.getElementById("name").style.display="none";
        alert("confirm option")
    }
}

function OnclickLogin(){
    //get the Value of the users Registered details and stores it in The various assigned Variable
        if(Loginpassword.value == LoginpasswordConf.value && User.value == Loginuser.value){
        window.location.href="Umag.html";
            alert("Succesful Login  @ " + User.value + " " + " click Ok to view") ;
        
        
        }else{
            alert("wrong details!! fix the error message to proceed")
        }
}

