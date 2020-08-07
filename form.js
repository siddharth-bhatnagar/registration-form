function validateFirstName() {
    var firstName = document.getElementById('firstName').value;

    if (firstName.length == 0) {
        document.getElementById('first').innerHTML = "<br/> First Name can't be empty!";
    } else if (firstName.length < 3) {
        document.getElementById('first').innerHTML = "<br/> Please Enter a valid name!";
    } else {
        document.getElementById('first').innerHTML = "  &#10004";
    }

}

function validateLastName() {
    var lastName = document.getElementById('lastName').value;

    if (lastName.length == 0) {
        document.getElementById('last').innerHTML = "<br/> Last Name can't be empty!";
    } else if (lastName.length < 3) {
        document.getElementById('last').innerHTML = "<br/> Please Enter a valid name!";
    } else {
        document.getElementById('last').innerHTML = "  &#10004";
    }
}

function validateEmail() {

    var Email = document.getElementById('email').value;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        document.getElementById('mail').innerHTML = " &#10004";
    }else{
        document.getElementById('mail').innerHTML = "<br/> Enter a valid email please";
    }
    
}

function checkForm(){
    
    validateFirstName();
    validateLastName();
    validateEmail();
    checkPass();
    

    var fullName = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
    
    document.getElementById('checkForm').innerHTML = "Hello " + fullName;

}

function checkPass(){

    var password = document.getElementById('pass').value;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
        document.getElementById('pass').innerHTML = " &#10004"
    }else
        document.getElementById('pass').innerHTML = "<br/> 8 Characters min, atleast 1 lower and 1 upper case and 1 special char"

}

