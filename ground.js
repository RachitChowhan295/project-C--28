class Ground {
    constructor() {
      var options = {
          'isStatic':true,
          'friction':0.5,
      }
      this.body = Bodies.rectangle(400,670,800,10, options);
      
      this.width = 800;
      this.height = 10;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0,this.width,this.height);
      pop();
    }
  };