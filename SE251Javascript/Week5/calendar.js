
$(document).ready(function(){
		
    var d 	= new Date();
    var mth = d.getMonth()+1;
    var yr 	= d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar (mth, yr);

    $("#month,#year").change(function(e) {
        showCalendar ($("#month").val(), $("#year").val());
    });
});


function daysInMonth(anyDateInMonth) {
return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
    
    
var firstDayOfMonth = mth + "/1/" + yr;
var d = new Date( firstDayOfMonth );
var numberOfDaysInMonth = daysInMonth(d);
var firstDayOfWeek = d.getDay();
var str = "";

/* this is where you'll generate the grid, for now I will just show first day of week */
    for(i = 0; i < firstDayOfWeek ; i++){
        
       //grabs any div with class day and adds it to var str
        str += "<div class=day></div>";
        
        
        
       
        
    }
    for(i = 0; i < numberOfDaysInMonth ; i++){
        
        // grabs same div but implements the index of Number of days in the month (the day)
        str+= "<div class=day>" + i + "</div>";



    }
    $("#results").html(str);
    var clicker = document.querySelectorAll("div.day");

    for(let i = 0; i < clicker.length; i++){

        clicker[i].addEventListener("click", function(e){
            e.preventDefault();
            console.log("click");
            if(clicker[i].style.backgroundColor === ""){

                clicker[i].style.backgroundColor = "green";

            }

            else if (clicker[i].style.backgroundColor === "green"){

                clicker[i].style.backgroundColor = "red";

            }


            else if (clicker[i].style.backgroundColor === "red"){

                clicker[i].style.backgroundColor = null;
            }


        });

        var button = document.querySelectorAll("input[type=button]");

        button[0].addEventListener("click",function(e){

            for(let i = 0; i < clicker.length ; i++){

                clicker[i].style.backgroundColor ="green";



            }



        });

        button[1].addEventListener("click",function(e){

            for(let i = 0; i < clicker.length ; i++){

                clicker[i].style.backgroundColor ="red";



            }



        });
        
    
    }
   


    
     
        
    

  
    
} 