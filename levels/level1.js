

LevelManager.levels.level1 = function() {
  // Player position when loaded into level.
  player.move(930, 660, antiPlayer);
  level1Audio.play();
  
  worms.push(new WormEnemy(275, 75, "worm000", 1030, 500));
  worms.push(new WormEnemy(275, 75, "worm000", 3100, 500, 0, -1));




  // level1Audio.play();




  images.push(new ImageComponent(3000, 2000, "level1Background", 500, 0)); //background
  walls.push(new Component(500, 50, "#196A0B", 800, 810));
  //spawn point 

  //numbers (width, length, color, x-cord, y-cord)
  walls.push(new Component(3000, 1000, "#39FF14", 500, 1500)); //level 1 floor

  walls.push(new Component(300, 50, "#21FFB6", 800, 1050)); //left platform

  walls.push(new Component(300, 50, "#21FFB6", 2500, 1260)); //right platform
  walls.push(new Component(225, 50, "#21FFB6", 3000, 1050)); // platform above door

  walls.push(new Component(400, 50, "#21FFB6", 1850, 1050));//platform


  walls.push(new Component(300, 50, "#21FFB6", 1300, 1260));//platform
  //middle platform

  //walls.push(new Component(100, 50, "#196A0B", 1050, 500));


  //borders here

  walls.push(new Component(50, 2500, "#013220", 500, -1000)); // left border

  walls.push(new Component(50, 2500, "#013220", 3500, -1000)); // right border

  //change border walls to #39FF14 color to see change
  //end of borders

  // image door
  //  walls.push(new Component(220, 250, "#21FFB6", 3000, 1250)); //door location

  levelCompleteMsg.innerText = `Great job on completing your first task! Don't get too confident though...\n\nThe task for this next level is simple: collect the sword.`;

  addItem("binaryGun");
  selectItem(0);
}