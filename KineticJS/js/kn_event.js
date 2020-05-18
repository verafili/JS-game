var layer;
var stage;
window.onload = function() {
  var kn_layerWidth = 578;
  var kn_layerHeight = 200;

  var stage = new Kinetic.Stage({
    container: 'container',
    width: kn_layerWidth,
    height: kn_layerHeight
  });

  layer = new Kinetic.Layer();

  var rect = new Kinetic.Rect({
    x : 0,
    y : 0,
    width: kn_layerWidth,
    height: kn_layerHeight,
    stroke: 'black',
    strokeWidth: 1
  });
  layer.add(rect);
  onBindEvent(stage);
}

function onBindEvent(stage) {
  var shapesLayer = new Kinetic.Layer();
  var messageLayer = new Kinetic.Layer();

  var circle = new Kinetic.Circle({
    x : 380,
    y : stage.getHeight() / 2,
    radius: 70,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
  });

  shapesLayer.add(circle);
  stage.add(shapesLayer);

  stage.add(messageLayer);

  circle.on('mouseover', function(){
    writeMessage(messageLayer, 'Mouseover circle');
  });

  circle.on('mouseout', function(){
    writeMessage(messageLayer, 'Mouseout circle');
  });

  circle.on('mousedown', function(){
    writeMessage(messageLayer, 'Mousedown circle');
  });

  circle.on('mouseup', function(){
    writeMessage(messageLayer, 'Mouseup circle');
  });

  circle.on('click', function(){
    writeMessage(messageLayer, 'Mouse click');
  });
}

function writeMessage(messageLayer, message){
  var context = messageLayer.getContext();
  messageLayer.clear();
  context.font = '18pt Calibri';
  context.fillStyle = 'black';
  context.fillText(message, 10, 25);

}
