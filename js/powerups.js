class PowerUps{
    constructor(){
        this.powerupInstruction = createElement("h3")
        this.powerupNo = createButton("No");
        this.powerupYes = createButton("Yes");

        this.airPowerup = createImg("images/powerups/air.png");
        this.doubleAttackPowerup = createImg("images/powerups/doubleAttack.png");
        this.earthPowerup = createImg("images/powerups/earth.png");
        this.firePowerup = createImg("images/powerups/fire.png");
        this.iceballPowerup = createImg("images/powerups/iceball.png");
        this.reverseAttackPowerup = createImg("images/powerups/reverseAttack.png");
        this.shieldPowerup = createImg("images/powerups/shield.png");
    }

    spawnPowerups() {
        if (frameCount % 120 === 0) {
          var powerup = createSprite(600,120,40,10);
  
          var rand = Math.round(random(1,7));
          switch(rand) {
            case 1: powerup.addImage(powerup1_image);
                    break;
            case 2: powerup.addImage(powerup2_image);
                    break;
            case 3: powerup.addImage(powerup3_image);
                    break;
            case 4: powerup.addImage(powerup4_image);
                    break;
            case 5: powerup.addImage(powerup5_image);
                    break;
            case 6: powerup.addImage(powerup6_image);
                    break;
            case 7: powerup.addImage(powerup7_image);
                    break;
            default: break;
          }
  
          //cloud.scale = 0.5;
          powerup.velocityX = -3;
          powerup.lifetime = 200;
          
          powerup.depth = player.depth;
          player.depth = player.depth + 1;
        
          powerupsGroup.add(powerup);
        }
        
      }

    displayOptions(){
        ground.visible = false;
        player.visible = false;

        powerupsGroup.setVisibleEach = false;
        obstaclesGroup.setVisibleEach = false;

        background("lightyelllow")

        this.powerupInstruction.position(displayWidth/7, displayHeight/3);
        this.powerupInstruction.style("font-size", "45px");
        this.powerupInstruction.style("font-family", "cursive");
        this.powerupInstruction.style("color", "orange");
        this.powerupInstruction.html("Would you like to equip yourself with powerupes for this battle?");

        this.powerupNo.position(displayWidth/2.15, displayHeight/1.6);
        this.powerupNo.style("font-size", "25px");
        this.powerupNo.style("background-color", "orange");
        this.powerupNo.style("color", "white");
        this.powerupNo.style("width", "100px");
        this.powerupNo.style("height", "60px");
        this.powerupNo.style("font-family", "cursive");
        this.powerupNo.mousePressed(()=>{
            this.powerupInstruction.hide();
            this.powerupNo.hide();
            this.powerupYes.hide();
        
            playGameState = "battle";
        })

        this.powerupYes.position(displayWidth/1.85, displayHeight/1.6);
        this.powerupYes.style("font-size", "25px");
        this.powerupYes.style("background-color", "orange");
        this.powerupYes.style("color", "white");
        this.powerupYes.style("width", "100px");
        this.powerupYes.style("height", "60px");
        this.powerupYes.style("font-family", "cursive");
        this.powerupYes.mousePressed(()=>{
            this.powerupInstruction.hide();
            this.powerupNo.hide();
            this.powerupYes.hide();

            choosingPowerups();
        })
    }

    choosingPowerups(){
        this.airPowerup.position(displayWidth/8, displayHeight/6);
        this.airPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.doubleAttackPowerup.position(displayWidth/3.5, displayHeight/6);
        this.doubleAttackPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.earthPowerup.position(displayWidth/2.25, displayHeight/6);
        this.earthPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.firePowerup.position(displayWidth/1.6, displayHeight/6);
        this.firePowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.iceballPowerup.position(displayWidth/1.3, displayHeight/6);
        this.iceballPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.reverseAttackPowerup.position(displayWidth/8, displayHeight/3);
        this.reverseAttackPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        this.shieldPowerup.position(displayWidth/3.5, displayHeight/3);
        this.shieldPowerup.mousePressed(()=>{
            powerupCount = powerupCount + 1;
        })

        if(powerupCount > 3){
            powerupsHide();
            playGameState = "battle";
        }
    }

    powerupsHide(){
        this.airPowerup.hide();
        this.doubleAttackPowerup.hide();
        this.earthPowerup.hide();
        this.firePowerup.hide();
        this.iceballPowerup.hide();
        this.reverseAttackPowerup.hide();
        this.shieldPowerup.hide();
    }
}