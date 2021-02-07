class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.5,
        
        }

        this.Dustbin=Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.Dustbin);
}
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    pop();
    }
}