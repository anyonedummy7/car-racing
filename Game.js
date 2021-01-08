class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    background(bg);
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("image1",image1);
    car2 = createSprite(300,200);
    car2.addImage("image2",image2);
    car3 = createSprite(500,200);
    car3.addImage("image3",image3);
    car4 = createSprite(700,200);
    car4.addImage("image4",image4);
    cars = [car1,car2,car3,car4];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getFinish();
    if(allPlayers !== undefined){
      //var display_position = 130;
      background("#c68767");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 175;
      var y;
      for(var plr in allPlayers){
        index  = index+1;
        x = x+220;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (plr === "player" + player.index){
          stroke(10);
          fill(255, 77, 106);
          circle(x,y,80);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index - 1].y;
        }
    
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
      console.log(player.distance)
    }

    if(player.distance>3700){

      gameState = 2;
      player.rank = player.rank+1;
      Player.updateFinish(player.rank);
      //console.log(player.name);
      
      form.leaderboard(player.name,player.rank);
    }

    drawSprites();
  }

  /*end(){

game.update(2);
console.log("GAME ENDED");

  }*/
}
