class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){
           // Choose correct code
           // Matter.Body.SetPosition(rain, {x:random(0,400), y:random(0,400)})
          // Matter.Body.setposition(this.rain, x:random(0,400), y:random(0,400))
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        //Choose Correct option
       // ellipse(this.rain.position.x,this.radius,this.radius);
       // ellipse(this.rain.position.x,this.rain.position.y);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}