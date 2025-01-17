var gameStarted = false;
var paused = false;


var jumpCounter;
var itemUses;

var mouseDown = false;

// Player
var player;
var antiPlayer;
var direction;
var playerIsMoving = false;
var playerIsJumping = false;
var playerAnimation = [];

// Player HP
var startingPlayerHP = 100;
var playerHP = startingPlayerHP;

// Enemies
var worms = []; //l1
var trojanHorse = []; //l2
var evilPlayer = []; //l3
var lasers = []; //enemy weapon

// Walls and Objects
var walls = [];
var images = [];

// weapons
var swordCollectable = [];
var showCollectableDialog = false;
var sword;
var bullets = [];

var levelCompleteMsg = document.getElementById("levelCompleteMessage");
var levelFailMsg = document.getElementById("levelFailMessage");
var nextBtn = document.getElementById("nextBtn");


// Advanced game controls for debugging
var debug = false;

// Player animation controllers defined in script.js!
var pUpAnim;
var pDownAnim;
var pLeftAnim;
var pRightAnim;

var pUpAnimSkate;
var pDownAnimSkate;
var pLeftAnimSkate;
var pRightAnimSkate;

// Level 1 timer
var level1Timer = 60; // 60 seconds

const LevelManager = {
  levels: {},
  currentLevel: 1,
};

// INVENTORY
const gameItems = {
  sword: {
    name: "Sword",
    imageID: "glitchSwordLeft",
    behavior: "sword",
    timer: 0,
    cooldownTime: 1 // 1 second
  },
  binaryGun: {
    name: "Binary Gun",
    imageID: "binaryGun",
    behavior: "shoot",
  }
}

let inventory = {};