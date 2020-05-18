var layer;
var stage;

window.onload = function() {
  var kn_layerWidth = 800;
  var kn_layerHeight = 300;

  stage = new Kinetic.Stage({
    container: 'container',
    width: kn_layerWidth,
    height: kn_layerHeight
  });

  layer = new Kinetic.Layer();
  //onTransform();
  onAnim();
}

function onTransform() {
  var rect = new Kinetic.Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 150,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 4,
    offset: {
      x: 50,
      y: 25
    }
  })
  layer.add(rect);
  stage.add(layer);

  stage.on('click', function(){
    rect.transitionTo({
      scale: {
        x: 2,
        y: 2
      },
      duration: 1,
      easing: "ease-in"
    });
  });
}

function onAnim(){
  var poly = new Kinetic.RegularPolygon({
    x: 100,
    y: 150,
    sides : 6,
    radius : 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
  });
  layer.add(poly);
  stage.add(layer);

  var anim = new Kinetic.Animation(function(frame){
    poly.rotate(2);
  }, layer);
  anim.start();
}
