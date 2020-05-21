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

  var saveBtn = new Kinetic.Text({
    x: 10,
    y: 350,
    width: 268,
    strokeWidth:1,
    fill: "8CC63F", //not color of background, color of text
    text: "Save my character",
    fontSize: 24,
    fontFamily: "Calibri",
    textFill: "white",
    align: "center",
    fontStyle: "italic",
    padding : 20,
    cornerRadius: 20
  });



  saveBtn.on("mouseover", function(){
    saveBtn.setFill("#009245");
    backGroundLayer.draw();
    document.body.style.cursor = "pointer";

  });

  saveBtn.on("mouseout", function(){
    saveBtn.setFill("#8CC63F");
    backGroundLayer.draw();
    document.body.style.cursor = "default";

  });

  saveBtn.on("click", function(){
    stage.toDataURL({ //don't work because of server
      callBack : function(dataUrl){
        window.open(dataUrl);
      }
    })

  });

  backGroundLayer.add(saveBtn);

  stage.add(backGroundLayer);

  onLayoutAssets(stage);
}
