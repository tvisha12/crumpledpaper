class Paper{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:4
        
      }
      this.body = Bodies.circle(x, y , radius/2, options);
      this.radius=radius
      World.add(world, this.body);
      
}
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius);
      pop();
}
} 