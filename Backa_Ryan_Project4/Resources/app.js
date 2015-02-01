// Ryan Backa
//VFW 1501
//Project 4

//creation of main window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title:"My Favorite Craft Brews"
});

//border for main window
var border = Ti.UI.createView({
	top: 0,
	height:20,
	backgroundColor:"#cccccc"
});

//create first button
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

//create second button	
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

//create third button
var infoView = Ti.UI.createView({
	height: 80,
	width:"95%",
	top: randomView.top + randomView.height + 1,
	borderRadius:5,
	borderWidth:1,
	borderColor:"#000",
	backgroundColor:"#33ccff"
});

var infoText = Ti.UI.createLabel({
	text:"Craft Brew Info",
	font: {fontSize:24, fontStyle: "bold", fontFamily: "Arial"}
});	

//main window footer
var projText = Ti.UI.createLabel({
	text:"VFW1501 // Ryan Backa",
	font:{fontSize:10, fontStyle: "italics", fontFamily: "Anivers"},
	bottom:10
});

//bringing in files for click events
var loadData = require("brewdata");	
var loadBrew = require("craftbrew");
var loadInfo = require("info");

//adding click events to buttons
dataView.addEventListener("click", loadData.dataPage);	
randomView.addEventListener("click", loadBrew.randomBrew);
infoView.addEventListener("click", loadInfo.info);

dataView.add(dataText);
randomView.add(randomPicTxt); 
infoView.add(infoText);
mainWin.add(border, randomView, dataView, infoView, projText);
mainWin.open();
