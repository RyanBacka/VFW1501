// Ryan Backa
//VFW 1501
//Project 4

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var border = Ti.UI.createView({
	top: 0,
	height:20,
	backgroundColor:"#fff"
});

//for(var i=3; i>0; i--){
	var clickView = Ti.UI.createView({
		height: "20%",
		top: border.height + 10,
		borderRadius:5,
		borderWidth:1,
		borderColor:"#fff"
	});
//};

var loadBrew = require("craftBrew");

clickView.addEventListener("click", randomBrew);

mainWin.add(border,clickView1);
mainWin.open();
