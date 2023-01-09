function checkform(){
    var name = document.getElementById("name");
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone");
    var mess = document.getElementById("mess");
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;

    if(name.value.length < 4){
            
                alert("Please enter valid name");
                name.focus();
                return false;
        }
    if(!reMail.test(email)){    
            alert("Email is invalid!");
            email.focus();
            return false;
            }
    if(phone.value.length<10){
                alert("Phone number need 10 number or more ");
                phone.focus();
                return false;
             }
    if(mess.value.length<10){
                alert("Please enter more than 50 character");
                mess.focus();
                return false;
    }
    alert("Thank you for feedback. Have a good day.")
  }


