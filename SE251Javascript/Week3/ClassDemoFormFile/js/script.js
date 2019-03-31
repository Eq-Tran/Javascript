 window.addEventListener("load", function(e){

//WAYS TO GRAB ATTRIBUTES IN HTML FILES WITH JAVASCRIPT

     var nameLabel = document.querySelector('#name label');
     var nameInput = document.querySelector('#name input');
     var nameError = document.querySelector('#name span');

     var ageInput = document.querySelectorAll('#age input');

     var statusInput= document.querySelector('input[name="awsomeness"]');

     var submitInput= document.querySelector('input[value="submit"]');

  nameInput.addEventListener('blur', function(e){
      e.preventDefault();
    console.log(nameInput.value, document.querySelector('input[name="age"]:checked'), statusInput.checked);

    if(nameInput.value===""){


        nameError.innerHTML= "*";
        nameError.setAttribute("class", "error");
        nameLabel.setAttribute("class","error");



    }
    else{


        nameError.innerHTML= "*";
        nameError.setAttribute("class", "Ok");
        nameLabel.setAttribute("class","Ok");
        
    }
    //diables form fields ( wnt to happen when user clicks for field)
    if(document.querySelector('input[name="age"]:checked')==="old"){

        statusInput.disabled = true;

    }
    else{

        statusInput.disabled = false;

    }



  });


  ageInput[0].addEventListener("click", disable);
  ageInput[1].addEventListener("click", disable);

  function disable(e){


    if(document.querySelector('input[name="age"]:checked').value==="old"){

        statusInput.disabled = true;

    }
    else{

        statusInput.disabled = false;

    }



  }
});