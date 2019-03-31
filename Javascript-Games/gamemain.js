    var c = document.querySelector('canvas');
    var ctx = c.getContext('2d');

    
    var fps = 1000/60;
    var timer = setInterval(main,fps);
    var ball = new ballObject();
    var bar1 = new bar();
    var brick = new Brick();
    var amount = 10;
    var ballRadius = 10;
    
   
    function rand(low,high){

        return Math.random() * (high - low) + low;



    }
    console.log(rand(12,8));
    /*for(let i = 0; i < amount; i++){

   
         ball[i].x = rand(0,c.width);
         ball[i].y = rand(0,c.height);
         ball[i].vx = 0;
         ball[i].vy = 2.5;
         
         

    }*/

    
    
    function main(){


        ctx.clearRect(0,0,c.width,c.height);
        console.log(timer);
        
     
        
        bar1.drawbar();
        ball.move();
        bar1.barMove();
        ball.drawCircle();
        brick.drawBrick();
        for(let i =0; i <amount; i++){
        brick.x
        }
        
        /*
        if(ball.x + ball.vx > CanvasGradient.width - ball.radius ||  ball.x + ball.vx < ball.radius){


            ball.vx = -ball.vx;



        }
        if(ball.y + ball.vy > CanvasGradient.height-ball.radius ||ball.y + ball.vy < ball.radius){



            ball.vy = -ball.vy;

        }

        if(ball.)
        */


        
        if(ball.x < 0 || ball.x > 800 || ball.y < 0 || ball.y > 800){


            ball.vx = -ball.vx;
            ball.vy = -ball.vy;


        }

    }  



 
    var keys = [];
    document.addEventListener("keydown", press);
    function press(e){
        keys[String.fromCharCode(e.keyCode)] = true;
        console.log(e.keyCode);


    }
    document.addEventListener("keyup", release);
    function release(e){
        keys[String.fromCharCode(e.keyCode)] = false;
        console.log(e.keyCode);


    }
  
    main();