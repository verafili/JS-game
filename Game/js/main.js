var layer;
var stage;

var kn_layerWidth = 640;
var kn_layerHeight = 480;

window.onload = function() {
  stage = new Kinetic.Stage({
    container: 'container',
    width: kn_layerWidth,
    height: kn_layerHeight
  });
  backGroundLayer = new Kinetic.Layer();
  onLayout(backGroundLayer);
}

function onLayout(backGroundLayer) {
  var backGround = new Kinetic.Rect({
    x: 0,
    y: 0,
    width: kn_layerWidth,
    height: kn_layerHeight,
    fill: "#6666FF",
    stroke: 'black',
    strokeWidth: 1,
    cornerRadius: 20
  });
  backGroundLayer.add(backGround);


  var headFrame = new Kinetic.Rect({
    x: 10,
    y: 10,
    width: 268,
    height: 268,
    fill: "#FFB81F",
    stroke: "#FF831F",
    strokeWidth: 3,
    cornerRadius: 20
  });

  headFrame.setShadowColor('black');
  headFrame.setShadowBlur(5);
  headFrame.setShadowOffset([5, 5]);
  headFrame.setShadowOpacity(0.5);


  backGroundLayer.add(headFrame);

  var assetTray = new Kinetic.Rect({
    x: 288,
    y: 10,
    width: 340,
    height: 460,
    fill: "#FFFFFF",
    stroke: "#FF831F",
    strokeWidth: 3,
    cornerRadius: 20
  });

  assetTray.setShadowColor('black');
  assetTray.setShadowBlur(5);
  assetTray.setShadowOffset([5, 5]);
  assetTray.setShadowOpacity(0.5);


  backGroundLayer.add(assetTray);

  var setBtn = new Kinetic.Text({
    x: 10,
    y: 350,
    width: 268,
    strokeWidth:1,
    fill: "white",
    text: "Save my character",
    fontSize: 24,
    fontFamily: "Calibri",
    textFill: "white",
    align: "center",
    fontStyle: "italic",
    padding : 20,
    cornerRadius: 20
  });

  backGroundLayer.add(setBtn);





  stage.add(backGroundLayer);

}
