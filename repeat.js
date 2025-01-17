///////////////////
/*REPEAT COMMANDS*/
///////////////////

var accumulator = 0;
var dt = 1 / 60;
var lastUpdate;

// DO NOT PUT ANYTHING INSIDE OF HERE
// USE EITHER UPDATE OR DRAW FUNCTIONS
// SEE NOTES ABOVE EACH ONE
function frameRate(timestamp) {
  if (paused) return;

  if (lastUpdate === undefined) {
    lastUpdate = timestamp;
  }

  var frameTime = (timestamp - lastUpdate) / 1000;
  lastUpdate = timestamp;
  accumulator += frameTime;

  while (accumulator >= dt) {
    update(dt);
    accumulator -= dt;
  }

  ////////////////////////
  /*FUNCTIONAL HEIRARCHY*/
  ////////////////////////

  var alpha = accumulator / dt;

  draw(alpha, antiPlayer);

  requestAnimationFrame(frameRate);
}

// PUT LOGIC INSIDE OF HERE!!!!
function update(dt) {
  player.update(dt, walls, antiPlayer);

  swingSword();
  fireGun();
  if (sword) sword.update();

  // fix this later put this into a function idididdi
  bulletLoop: for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < walls.length; j++) {
      if (collisionCheck(bullets[i], walls[j])) {
        console.log("bottomCol");
        bullets.splice(0, 1);
        break bulletLoop;
      }
    }

    bullets[i].update();
  }

  lasersLoop: for (let i = 0; i < lasers.length; i++) {
    for (let j = 0; j < walls.length; j++) {
      if (collisionCheck(lasers[i], walls[j])) {
        console.log("bottomCol");
        lasers.splice(0, 1);
        break lasersLoop;
      }
    }

    lasers[i].update();
  }

  swordCollectableUpdate();

  if (playerHP <= 0) {
    failLevel("Ouch! Your HP got too low.");
  }

  // LEVEL 1 LOGIC
  if (LevelManager.currentLevel == 1) {
    if (worms.length == 0) {
      completeLevel();
    }


    if (level1Timer > 0) {
      level1Timer -= dt;
    } else {
      failLevel("Be more careful with the time!");
    }
  } else if (LevelManager.currentLevel == 2) { // LEVEL 2 LOGIC
    if (trojanHorse.length == 0) {
      completeLevel();
    }
  } else if (LevelManager.currentLevel == 3) { // LEVEL 3 LOGIC
    if (evilPlayer.length == 0) {
      completeLevel();
    }
  }

  wormUpdate(dt, walls, antiPlayer);
  trojanHorseUpdate(dt, walls, antiPlayer);
  evilPlayerUpdate(dt, walls, antiPlayer);
}

// IMPORTANT:
// ONLY CALL THE .RENDER FUNCTION INSIDE OF HERE!!!!!!!
// LOGIC SHOULD GO IN UPDATE
function draw(alpha, ap) {
  ctx.clearRect(0, 0, 1920, 1080);
  print(images, alpha, ap);
  print(walls, alpha, ap);

  print(worms, alpha, ap);
  print(trojanHorse, alpha, ap);
  print(evilPlayer, alpha, ap);
  
  print(swordCollectable, alpha, ap);

  player.render(alpha, ap);
  antiPlayer.render(alpha, ap);

  print(bullets, alpha, ap);
  print(lasers, alpha, ap);
  if (sword) sword.render(alpha, ap);

  inventoryGUI();

  if (debug == true) {
    GUIRenderer.drawRect(500, 75, "rgba(0,0,0,0.5)", 0, 150);
    GUIRenderer.drawText(`X: ${Math.round(player.x)} Y: ${Math.round(player.y)}`, "white", "45px DotGothic16", 25, 200);
  }

  GUIRenderer.drawRect(500, 75, "rgba(0,0,0,0.5)", 0, 0);
  GUIRenderer.drawText(`Player HP: ${Math.ceil(playerHP)}`, "white", "45px DotGothic16", 25, 50);

  if (LevelManager.currentLevel == 1) {
    GUIRenderer.drawRect(500, 75, "rgba(0,0,0,0.5)", 0, 75);
    GUIRenderer.drawText(`Time remaining: ${Math.floor(level1Timer)}`, "white", "45px DotGothic16", 25, 125);
  }

  if (showCollectableDialog) {
    GUIRenderer.drawRect(400, 50, "rgba(0,0,0,0.5)", 960, 540);
    GUIRenderer.drawText(`Press F to collect`, "white", "30px DotGothic16", 1010, 575);
  }

  GUIRenderer.drawText(`Level ${LevelManager.currentLevel}`, "white", "45px DotGothic16", canvas.width - 200, 40);
}