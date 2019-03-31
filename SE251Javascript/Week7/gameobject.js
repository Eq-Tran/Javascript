
class gameObject{
    constructor()
    {
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        this.vx = 10;
        this.vy = 0;
        this.color = "red";
        this.angle = 0;
        console.log(0);
        /*
        if(a !== undefined){

            for( let value in a){

                    if(this[value]){

                        this[value]=a[value];
                    }

            }

        }*/
    }

    drawCircle(){
        context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle * Math.PI/180);
            context.beginPath();
            context.arc(0,0,this.w/2,0,360*Math.PI/180,false)
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
        context.restore();
       

    }

   drawRect(){

    ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle * Math.PI/180);
        ctx.fillRect(this.x,this.y,-this.w/2,-this.h/2);
        ctx.fillStyle = this.color;
    ctx.restore();


    }

    move(){

        this.x +=this.vx;
        this.y +=this.vy;

    }

}










//OLDWAY
/*function gameObject(){

    this.x =  
    this.y = 
    this.w =
    this.h = 
    this.vx =
    this.vy = 
    this.color =

    this.drawCircle = function (){


    }

    this.drawRect = function (){



    }

    this.move = function(){



    }

}
*/