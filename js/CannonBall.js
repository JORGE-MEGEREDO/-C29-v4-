class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
this.body = Bodies.circle(x, y, this.r, options);  //crie um corpo circular
this.image loadImage("./assets/cannonball.png");  //carregue a imagem
    World.add(world, this.body);
  }

  shoot() {
    
    var velocity = p5.Vector.fromAngle(cannon.angle); //defina o ângulo da bala para o canhão
   velocity.mult(20); //defina valor estático para o corpo
    Matter.Body.setStatic(this.body, false); //defina a velocidade da bala para fazer a bala se mover
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
  image(this.image) //mostrar a imagem
    pop();

    }
  }

