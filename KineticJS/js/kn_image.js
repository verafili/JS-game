var layer;
var stage;

window.onload = function (){
  var kn_layerWidth = 800;
  var kn_layerHeight = 300;

  stage = new Kinetic.Stage({
    container : 'container',
    width : kn_layerWidth,
    height : kn_layerHeight
  });

  layer = new Kinetic.Layer();

  var imageObj = new Image();
    imageObj.src = 'img/sunset.jpg';

  imageObj.onload = function(){
    var img = new Kinetic.Image({
      x : 0,
      y : 0,
      image : imageObj,
      width : 450,
      heiht : 337
    });
    layer.add(img);
    stage.add(layer);
  }

}
