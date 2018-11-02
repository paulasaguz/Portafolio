window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags', options);
    } catch(e) {
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
  var options = { 
    textColour : 'white',
    outlineThickness : 0.5,
    outlineColour : '#fe0853',
    maxSpeed : 0.06,
    freezeActive:true,
    shuffleTags:true,
    shape:'sphere',
    zoom:1,
    noSelect:true,
    textFont:'arial',
    textHeight:'30',
    pinchZoom:true,
    freezeDecel:true,
    fadeIn:3000,
    initial: [0.3,-0.1],
    depth : 0.8
  }
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("myCanvas").style.width = "300px";
    document.getElementById("myCanvas").style.height = "300px";
    }
  else {
    document.getElementById("myCanvas").style.width = "500px";
    document.getElementById("myCanvas").style.height = "500px";
  }
