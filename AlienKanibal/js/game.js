//Creation of CANVAS

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

var bgImage = new Image();
var bgReady = false;
bgImage.onload = function() {
  bgReady = true;
}
bgImage.src = "images/background.png";

//Kanibal images
var kanibalImage = new Image();
var kanibalReady = false;
kanibalImage.onload = function() {
  kanibalReady = true;
}
kanibalImage.src = "images/kanibal.png";

//Victim image
var victimImage = new Image();
var victimReady = false;
victimImage.onload = function() {
  victimReady = true;
}
victimImage.src = "images/victim.png";

//Positions
var kanibal = {
  speed: 256
}

var victim = {};

var victimsEaten = 0;

var keysDown = {};

//Gameplay



addEventListener("keydown", function(e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
  delete keysDown[e.keyCode];
});


var jump = 32; //px taille d'ecran
function reset() {
  kanibal.x = canvas.width / 2;
  kanibal.y = canvas.height / 2;

  //Throw the victim somewhere on the sreen (randomly)
  victim.x = jump + (Math.random() * (canvas.width - jump * 2));
  victim.y = jump + (Math.random() * (canvas.height - jump * 2));
}


function update(listener) { //unixpapa.com/js/testkey.html
  if (38 in keysDown) { //top
    kanibal.y -= kanibal.speed * listener;
  }
  if (40 in keysDown) { //bottom
    kanibal.y += kanibal.speed * listener;
  }
  if (37 in keysDown) { //left
    kanibal.x -= kanibal.speed * listener;
  }
  if (39 in keysDown) { //right
    kanibal.x += kanibal.speed * listener;
  }

  if (kanibal.x <= (victim.x + jump) && victim.x <= (kanibal.x + jump) && kanibal.y <= (victim.y + jump) && victim.y <= (kanibal.y + jump)) {
    ++victimsEaten;
    reset();
  }
}

function render() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (kanibalReady) {
    ctx.drawImage(kanibalImage, kanibal.x, kanibal.y);
  }

  if (victimReady) {
    ctx.drawImage(victimImage, victim.x, victim.y);
  }

  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Victims eaten : " + victimsEaten, 20, 10);
}

function main() {
  var now = Date.now();
  var delta = now - then;
  update(delta / 1000);
  render();
  then = now; //activate update all the time
}

reset();
var then = Date.now();
setInterval(main, 1);
