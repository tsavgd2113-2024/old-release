LevelManager.levels.level2 = function() {
  player.move(1000, 1100, antiPlayer);
  level2Part1Audio.play();

  trojanHorse.push(new TrojanHorseEnemy(190, 190, "trojanHorseLeft000", 3100, 860));


  // level2Audio.play();
  swordCollectable.push(new ImageComponent(200, 75, "glitchSwordLeft", 2750, 780));

  images.push(new ImageComponent(3000, 2000, "level1Background", 500, -500)); //background




  walls.push(new Component(350, 30, "#196A0B", 3000, 830));
  //position of trojan and platform

  //numbers (width, length, color, x-cord, y-cord)
  walls.push(new Component(3000, 1000, "#39FF14", 500, 1500)); //level 1 floor

//--OBBY--
   walls.push(new Component(200, 30, "#21FFB6", 900, 1260)); //left platform
   walls.push(new Component(150, 30, "#21FFB6", 650, 1050));//Top platform
   walls.push(new Component(200, 30, "#21FFB6", 870, 860)); //Top platform
   walls.push(new Component(200, 30, "#21FFB6", 1450, 800)); //Top platform
   walls.push(new Component(300, 30, "#21FFB6", 2000, 670)); 
//--OBBY--

  walls.push(new Component(250, 30, "#21FFB6", 1500, 1260)); //Top platform
  walls.push(new Component(250, 30, "#21FFB6", 2150, 1260));
  walls.push(new Component(250, 30, "#21FFB6", 2800, 1260));
  
  walls.push(new Component(600, 30, "#21FFB6", 2700, 860)); // platform 








  //walls.push(new Component(100, 50, "#196A0B", 1050, 500));

  //borders here

  walls.push(new Component(50, 2500, "#013220", 500, -1000)); // left border

  walls.push(new Component(50, 2500, "#013220", 3450, -1000)); // right border








  levelCompleteMsg.innerText = `Great job defeating the Trojan Horse!\n\nIf you thought this level was hard, wait until the next level... Good luck! You'll need it...`;
  addItem("binaryGun");
  selectItem(0);
}
