class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    
    this.title.html("Hot Wheels");
    this.title.id("title1")
    this.title.position(displayWidth/2 - 120,0);

    this.input.position(displayWidth/2 - 80,displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 20,displayHeight/2);
    this.reset.position(displayWidth - 100, 20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      
    });

  this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    Player.updateFinish(0);
  })
  }

  leaderboard(name,rank){

var message = createElement("h1");
message.id("msg")
message.html("*********"+ name + " is at " + rank+"********");
message.position(displayWidth/2 - 70, displayHeight/4);



  }
}