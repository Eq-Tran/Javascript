var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var balls = [];
var amount = 1000;

function rand(low,high){

    return Math.random() * (high - low) + low;


}
console.log(rand(-12,8));

for(let i = 0; i < amount ; i++){

    balls[i] = new gameObject();
    //this sets the balls to appear at random locations like rain drops
    balls[i].x = Math.round(rand(0,canvas.width));
    balls[i].y = Math.round(rand(0,canvas.height));
    balls[i].vy = Math.round(rand(5,15));
    balls[i].vx = 0;
    balls[i].h = balls[i].vy;
    balls[i].w = balls[i].vy;


}

main();

function main(){
    context.clearRect(0,0,canvas.width,canvas.height);

    console.log(000)
    for(let i=0; i < balls.length; i++){

        balls[i].drawCircle();
        balls[i].move();
        if(balls[i].y > canvas.height + balls[i].h/2){

            balls[i].y = 0 - balls[i].h/2

        }

    }

    
   
    setTimeout(main,1000/60);
}
