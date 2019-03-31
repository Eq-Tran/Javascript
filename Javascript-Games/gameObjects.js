class ballObject  {

    constructor()
    {
    this.x=400;
    this.y=400;
    this.w=20;
    this.h=20;
    this.radius = 10;
    this.vx = 0;
    this.vy = 10;
    this.color="blue";
    this.angle=0;
    

       
    }
    //function draws the ball
    drawCircle(){
            ctx.save();
                ctx.translate(this.x,this.y);
                ctx.rotate(this.angle * Math.PI/180);
                ctx.beginPath();
                //this is the method to build the ball
                ctx.arc(0,0,this.radius,0,360*Math.PI/180,true);
                ctx.closePath();
                //this adds color to the ball
                ctx.fillStyle = this.color;
                ctx.fill();
            ctx.restore();


        }
    //function to move the ball   
    move(){

        this.x +=  this.vx;
        this.y += this.vy;


    }
        
 
}//end ball class

class bar {

    constructor()
    {
    this.x = 200;
    this.y = 380;
    this.vx = 0;
    this.vy = 0;
    this.w = 220;
    this.h = 20;
    this.color = "purple";
    
    }


    drawbar(){

        ctx.save();
            ctx.translate(this.x,this.y)
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.fillRect(this.x,this.y,-this.w/2,-this.h/2);
            ctx.closePath();
            ctx.fill();
        ctx.restore();


        
    }

    barMove(){

          
        if(keys["D"]){

            bar1.vx += 1;
        }
        if(keys["A"]){
    
            bar1.vx += -1;
        }
      

        bar1.vx *= .9;
        bar1.vy += 1;
       
        if(bar1.x < 52 || bar1.x > 400){

            bar1.vx = -bar1.vx;
        }
        bar1.x += bar1.vx;
        
        




    }
  
    
   

}//end bar class

class Brick{

    constructor(){
        this.x = 200;
        this.y = 15;
        this.w = 200;
        this.h = 40;
        this.color = "red";

        


    }

    drawBrick(){
        ctx.save();
            ctx.beginPath();
            ctx.translate(this.x,this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.fillRect(this.x,this.y,-this.w/2,-this.h/2);
            ctx.closePath();
        ctx.restore();
        }




}//end rectangle class