function checkform(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
    var gender = document.getElementById("gender");
    if(user.value!=""){
        if(user.value.length < 8){
            
                alert("Username with 8 characters or more");
                user.focus();
                return false;
        }

    }else{
        alert("Enter username");
        user.focus();
        return false;
    }
    if(pass.value!=""){
      if(pass.value.length<8){
            
            alert("Password with 8 characters or more");
            pass.focus();
            return false;
    }
        

    }else{
        alert("Enter your password");
        pass.focus();
        return false;
    } 

    if(repass.value!=""){
      if(repass.value!=pass.value){
        alert("Password does not match");
        repass.focus();
        return false;
      }
        

      }else{
          alert("Please re-enter your password");
          repass.focus();
          return false;
      } 
      
    if(phone.value.length<10){
        alert("Phone number need 10 number or more ");
        phone.focus();
        return false;
     }

     if(!reMail.test(email)){    
          alert("Email is invalid!");
          email.focus();
          return false;
          }
          alert("Thank you for registering.");

}