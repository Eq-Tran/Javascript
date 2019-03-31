

//Event Listeners
window.addEventListener("load", function(e){//=> arrow function another way to call functions in event listener

    //this.console.log(e);

    var link = document.querySelectorAll('a');
    //Storing event listenters in arrays
        for ( var i = 0; i < link.length; i++)
         {
             link[i].addEventListener("click", function(e){


                 e.preventDefault();
                 e.target.style.color=e.target.dataset ;


             }); 
        }
    
    
    });






    
    function add(a,b){

        e.preventDefault();
        console.log(a+b);
        return a+b;

    }

    console.log(add(100,100));
    //Best way to add event listener with anonymous funcion
    link[0].addEventListener("click", function(e){
        
        e.preventDefault();
        add(5,6); 
    
    }); 

    
    function clicker(e){

        e.preventDefault();
        add(2,2);

    }

    link[0].addEventListener("click", clicker);
    

/*
    link[0].addEventListener("click", clicker);

    function clicker(e){


        e.preventDefault();
        console.log(this);
 

    }

    function alert(e){

        e.preventDefault();
        alert("Yo");
    }

    link[1].addEventListener("click", function(e){


        e.preventDefault();
        link[0].removeEventListener("click", clicker);

        console.log(this);
        //cosole.log(e.target);//another way to log on click event must use =>


    });

*/

