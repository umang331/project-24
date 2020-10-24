class Paper{

    constructor(x,y){
    var ball_options = {
        'restitution' : 0.5,
        'friction' : 0.5,
        'density': 1
      }
    this.body = Bodies.circle(x,y,20,ball_options);
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,20,20);
    }
}