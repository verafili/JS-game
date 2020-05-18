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
  onTransform();
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
