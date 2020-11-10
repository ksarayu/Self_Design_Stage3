class Play{
    constructor(){
        this.satchel = createImg("images/satchel.png");
    }

    displayLevel1(){
        background("white");

        this.satchel.position(displayWidth/5.5, displayHeight/300);
        this.satchel.mousePressed(()=>{
            fill("black");
            textSize(15);
            text("Number of powerups: " + powerupTotal, displayWidth/3, 100);
        })

        if (playGameState === "play"){
            if(keyDown("space")) {
              player.velocityY = -10;
              player.changeAnimation("player_jumping", player_jumping);
            }
          
            player.velocityY = player.velocityY + 0.8
          
            if (ground.x < 0){
              ground.x = ground.width/2;
            }

            powerups.spawnPowerups();
            spawnObstacles();
            
            //ground.velocityX = -(6 + 3*score/100);
            
            //score = score + Math.round(getFrameRate()/60);

            if(powerupsGroup.isTouching(player)){
              powerupTotal = powerupTotal + 1;
            }
            
            if(obstaclesGroup.isTouching(player)){
             powerups.displayOptions();
            }
        }

            else if (playGameState === "battle"){
              displayBattle();
            }
          
            player.collide(invisibleGround);
        
            drawSprites();
    }     

    displayBattle(){
        //obstaclesGroup.setVelocityXEach(0);
        //cloudsGroup.setVelocityXEach(0);
        //obstaclesGroup.setLifetimeEach(-1);
        //cloudsGroup.setLifetimeEach(-1);

        ground.changeImage("battleScene_image", battleScene_image);
        ground.velocityX = 0;
    
        player.changeAnimation("player_shooting", player_shooting);
    }
    
    spawnObstacles() {
      if(frameCount % 80 === 0) {
        var obstacle = createSprite(600,165,10,40);
        obstacle.velocityX = -4;
        
        var rand = Math.round(random(1,7));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1_image);
                  break;
          case 2: obstacle.addImage(obstacle2_image);
                  break;
          case 3: obstacle.addImage(obstacle3_image);
                  break;
          case 4: obstacle.addImage(obstacle4_image);
                  break;
          case 5: obstacle.addImage(obstacle5_image);
                  break;
          case 6: obstacle.addImage(obstacle6_image);
                  break;
          case 7: obstacle.addImage(obstacle7_image);
                  break;
          default: break;
        }
                  
        //obstacle.scale = 0.5;
        obstacle.lifetime = 300;
  
        obstaclesGroup.add(obstacle);
      }
    }
}