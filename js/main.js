window.onload = function() {
  //onMessage('Hello JS');
  //onVariable();
  //onCondition();
  //onCondition2("Fi")
  //onSwitch("k");
  //onOperateurernaire();
  //onFor(3);
  //onWhile();
  //onArray();
  onDate();
}

function onMessage(msg) {
  alert(msg);
}

function onVariable() {
  var name = "Pierre";
  var lastname = "Dupont";
  var user = name + " " + lastname;
  alert(user);
}

function onTypeVariable(){
  var score_1 = 100;
  var score_2 = parseInt("50");
  alert(score_1+score_2);
}

function onCondition() {
  var sex = "H";
  var user;
  if (sex == "F") {
    user = "Femme";
  } else {
    user = "Homme";
  }
  alert(user);
}

function onCondition2(visitor) {
  var message;
  if (visitor == "H") {
    message = "Bienvenue Homme";
  } else if (visitor == "F") {
    message = "Bienvenue Femme";
  } else {
    message = "Attaque aliens";
  }
  alert(message);
}

function onSwitch(visitor) {
  var message;
  switch (visitor) {
    case "H":
      message = "Bienvenue Homme";
      break;
    case "F":
      message = "Bienvenue Femme";
      break;
    default:
      message = "Attaque aliens";
  }
  alert(message);
}

function onOperateurernaire(){
  var score = 15 ;
  (score >=10) ? winner = "true" : winner = "false";
  alert(winner);
}

function onFor(max){
  for (i = 1; i<max; i++){
    alert(i);
  }
}

function onWhile(){
  var i=0;
  while (i<5){
    alert(i);
    i++;
  }
}

function onArray(){
  var users = new Array("Pierre","Paul","Jacques");
  users.push("Henri"); // add an element
  for(user in users){
    alert(users[user]);
  }
}

function onDate(){
  //var myDate = new Date();
  //alert(myDate.getFullYear());
  //setTimeout("onTimeOut()", 3000); //shows alerte after 3 sec
  var timer = setInterval("onSetInterval()", 3000); //shows messege every 3 sec
}

function onTimeOut(){
  alert("TimeOut");
}

function onSetInterval(){
  alert("set Interval");
  clearInterval(timer); // shows one time, doesn't work
}
