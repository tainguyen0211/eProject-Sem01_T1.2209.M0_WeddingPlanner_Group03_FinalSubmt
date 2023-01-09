function checkform(){
    var user = document.getElementById("user");
    var email = document.getElementById("email").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
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
    if(!reMail.test(email)){    
        alert("Email is invalid!");
        email.focus();
        return false;
        }
    alert("Check your email to reset password. Thank you");
}