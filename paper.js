class Paper {
    constructor() {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(150,600,30,30, options);
      
      this.width = 15;
      this.height = 15

      this.image = loadImage("paperimj.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      image(this.image,0, 0,this.width,this.height);
      pop();
    }
  };