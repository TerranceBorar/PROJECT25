class Paper{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
         }
         this.x=x;
         this.y=y;
         this.r=r
         this.body=Bodies.circle(this.x,this.y,this.r/2,options)
         World.add(world,this.body);
         this.image=loadImage("paper.png")
    }
    display()
    {
        var ppos= this.body.position;
        imageMode(CENTER)
    image(this.image,ppos.x,ppos.y,this.r)
        push();
        translate(ppos.x,ppos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        pop();
    }
    
}