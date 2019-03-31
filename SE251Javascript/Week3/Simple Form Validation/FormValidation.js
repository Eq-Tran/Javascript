// JavaScript Document
window.addEventListener("load", function(e){

//Variable Declarations
var firstName = document.querySelector('#first-name');
var firstNameError = document.querySelector('#fn-error');
var lastName = document.querySelector('#last-name');
var lastNameError = document.querySelector('#ln-error');
var email = document.querySelector('#email');
var emailError = document.querySelector('#email-error');
var emailConfirm = document.querySelector('#emailConfirm');
var confirmError = document.querySelector('#confirm-error');
var phone = document.querySelector('#phone');
var phoneError = document.querySelector('#phone-error');
var submit = document.querySelector('input[type="button"]');
var confirmation = document.querySelector('#confirmation');
var form = document.querySelector('#form');
var info = document.querySelector('#info');



submit.addEventListener("click",function(e){

    e.preventDefault();

    var person = {

        firstname:firstName.value,
        lastname:lastName.value,
        emailname:email.value,
        emailconfirm:emailConfirm.value,
        phonenumber:phone.value
    
    }

    var firstnameresult = /[a-z\-]/i.test(person.firstname);
    var lastnameresult = /[a-z\-]/i.test(person.lastname);
    var emailresult = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i.test(person.emailname);
    var emailconfirmresult = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i.test(person.emailconfirm);
    var phoneresult = /[\d {9,}]/i.test(person.phonenumber)
    console.log(emailresult);
    console.log(emailconfirmresult);
    console.log(lastnameresult);
    console.log(firstnameresult);
    console.log(phoneresult);
    
    if(firstName.value === ""){

        firstName.parentElement.setAttribute("class","error");
        firstNameError.innerHTML = "*";
        

    }
    else{

        firstNameError.innerHTML ="";
        firstName.parentElement.setAttribute("class","ok");

    }

    if(lastName.value === ""){

        lastNameError.innerHTML="*";
        lastName.parentElement.setAttribute("class","error");

    }
    else{
         lastNameError.innerHTML="";
          lastName.parentElement.setAttribute("class","ok");

    }

    if(email.value===""){
        emailError.innerHTML ="*";
        email.parentElement.setAttribute("class","error");

    }
    else{
        emailError.innerHTML = "";
        email.parentElement.setAttribute("class","ok");


    }

    if(emailConfirm.value === ""){
 
        confirmError.innerHTML = "*";
        emailConfirm.parentElement.setAttribute("class", "error");
    


    
    
    }   
    else{

        confirmError.innerHTML = "";
        emailConfirm.parentElement.setAttribute("class", "ok");

    }

    if(email.value !== emailConfirm.value){
    alert("Your emails do not match")

    }

    if(phone.value === ""){

        phoneError.innerHTML = "*";
        phone.parentElement.setAttribute("class","error");

    }
    else{

        phoneError.innerHTML = "";
        phone.parentElement.setAttribute("class","ok");


    }

    if(firstnameresult == true && lastnameresult == true && emailresult == true && emailconfirmresult == true && phoneresult == true){

     if(phone.value !== "" && email.value !== "" && emailConfirm.value !== ""  && firstName.value !== "" && lastName.value !== "" ){

        if(email.value === emailConfirm.value){
            confirmation.style.display = "block";
            form.style.display = "none";

            info.innerHTML = person.firstname + " " + person.lastname;
            info.innerHTML +=  "<br>";
            info.innerHTML += person.emailname;
            info.innerHTML += "<br>";
            info.innerHTML += person.emailconfirm;
            info.innerHTML += "<br>";
            info.innerHTML += person.phonenumber;
        
        }

    }
}

});












    
});