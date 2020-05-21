function onLayoutAssets(stage) {
  //Head
  var headLayer = new Kinetic.Layer();
  var headObj = new Image();
  headObj.src = 'img/head.png'; //don't show the image

  headObj.onload = function() {
    var head = new Kinetic.Image({
      x: 70,
      y: 40,
      width: 148,
      height: 216,
      image: headObj
    });

    headLayer.add(head);
    stage.add(headLayer);
  }

  //Hairs
  var assetLayer = new Kinetic.Layer();

  var hair_1Obj = new Image();
  hair_1Obj.src = 'img/hair_1.png'; //don't show the image

  hair_1Obj.onload = function() {
    var hair_1 = new Kinetic.Image({
      x: 315,
      y: 20,
      image: hair_1Obj,
      width: 148,
      heiht: 216,
      draggable: true

    });

    assetLayer.add(hair_1);
    stage.add(assetLayer);

    hair_1.on("mouseover", function() {
      document.body.style.cursor = "move";
    });

    hair_1.on("mouseout", function() {
      document.body.style.cursor = "default";
    });
  }
  var hair_2Obj = new Image();
  hair_2Obj.src = 'img/hair_2.png'; //don't show the image

  hair_2Obj.onload = function() {
    var hair_2 = new Kinetic.Image({
      x: 460,
      y: 135,
      image: hair_2Obj,
      width: 162,
      heiht: 138,
      draggable: true

    });

    assetLayer.add(hair_2);
    stage.add(assetLayer);

    hair_2.on("mouseover", function() {
      document.body.style.cursor = "move";
    });

    hair_2.on("mouseout", function() {
      document.body.style.cursor = "default";
    });
  }
  var hair_3Obj = new Image();
  hair_3Obj.src = 'img/hair_3.png'; //don't show the image

  hair_3Obj.onload = function() {
    var hair_3 = new Kinetic.Image({
      x: 330,
      y: 250,
      image: hair_3Obj,
      width: 179,
      heiht: 138,
      draggable: true

    });

    assetLayer.add(hair_3);
    stage.add(assetLayer);

    hair_3.on("mouseover", function() {
      document.body.style.cursor = "move";
    });

    hair_3.on("mouseout", function() {
      document.body.style.cursor = "default";
    });
  }
  var hair_4Obj = new Image();
  hair_4Obj.src = 'img/hair_4.png'; //don't show the image

  hair_4Obj.onload = function() {
    var hair_4 = new Kinetic.Image({
      x: 450,
      y: 400,
      image: hair_4Obj,
      width: 179,
      heiht: 63,
      draggable: true

    });

    assetLayer.add(hair_4);
    stage.add(assetLayer);

    hair_4.on("mouseover", function() {
      document.body.style.cursor = "move";
    });

    hair_4.on("mouseout", function() {
      document.body.style.cursor = "default";
    });

  }
}
