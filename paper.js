class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
        this.x=x
        this.y=y
        this.r=r
        
        this.body=Bodies.circle(x,y,r,options);
    this.image=loadImage("paper.png");
    World.add(world, this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y); 
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
    }
}