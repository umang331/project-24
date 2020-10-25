class Paper{

    constructor(x,y){
    var ball_options = {
        'restitution' : 0.5,
        'friction' : 0.5,
        'density': 1
      }
    this.x = x;
        this.y = y;
        this.r = 20;
    this.body = Bodies.circle(x,y,20,ball_options);
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}
