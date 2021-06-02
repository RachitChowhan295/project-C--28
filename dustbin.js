class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          'isStatic':true,
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      
      this.width = width;
      this.height = height;

      this.image = loadImage("dustbinimj.png")

      World.add(world, this.body);
    }
    display(){

      imageMode(CENTER);
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      //image(this.image,0, 0,this.width ,this.height );
      image(this.image,650,660,150,150);
      pop();
    }
  };