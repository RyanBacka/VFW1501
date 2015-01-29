// Ryan Backa
//VFW 1501
//Project 4

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title:"My Favorite Craft Brews"
});

var border = Ti.UI.createView({
	top: 0,
	height:20,
	backgroundColor:"#cccccc"
});

var dataView = Ti.UI.createView({
	height:80,
	width:"95%",
	top: border.height + 10,
	borderRadius:5,
	borderWidth:1,
	borderColor:"#000",
	backgroundColor:"#cc6600"
});

var dataText = Ti.UI.createLabel({
	text:"Brew Data",
	font: {fontSize:24, fontStyle: "bold", fontFamily: "Arial"}
});
	
var randomView = Ti.UI.createView({
	height: 80,
	width:"95%",
	top: dataView.top + dataView.height + 1,
	borderRadius:5,
	borderWidth:1,
	borderColor:"#000",
	backgroundColor:"#ccffcc"
});

var randomPicTxt = Ti.UI.createLabel({
	text:"Random Brew",
	font: {fontSize:24, fontStyle: "bold", fontFamily: "Arial"}
});

var infoView = Ti.UI.createView({
	height: 80,
	width:"95%",
	top: dataView.top + dataView.height + 1,
	borderRadius:5,
	borderWidth:1,
	borderColor:"#000",
	backgroundColor:"#ccffcc"
});

var infoText = Ti.UI.createLabel({
	text:"Craft Brew Info",
	font: {fontSize:24, fontStyle: "bold", fontFamily: "Arial"}
});	
	
var loadBrew = require("craftbrew");
	
randomView.addEventListener("click", loadBrew.randomBrew);
dataView.add(dataText);
randomView.add(randomPicTxt);
mainWin.add(border, randomView, dataView);
mainWin.open();
