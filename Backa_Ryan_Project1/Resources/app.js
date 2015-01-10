//Ryan Backa
//VFW1501
//Project 1

Ti.UI.setBackgroundColor("#000");
//global variables
var counter = 0;	

//creation of the main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	backgroundRepeat: true,
	title: "My First Window"
});
//creation of the title box
var titleView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	//width: 100,
	height:20,
	top: 20,
	left: 20,
	right: 20
});
//creation of the main box
var mainView = Ti.UI.createView({
	backgroundColor: "#bdbdbd",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	top: titleView.top + titleView.height + 5,
	
	left:20,
	right: 20,
	height:400
});
//creation of the next button
var nextView = Ti.UI.createView({
	backgroundColor: "#5FFB17",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	top: mainView.top + mainView.height + 5,
	bottom:20,
	right: 20,
	width: "42%"
});
//creation of the prev button
var prevView = Ti.UI.createView({
	backgroundColor: "#5FFB17",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	top: mainView.top + mainView.height + 5,
	bottom:20,
	left: 20,
	width: "42%"
});
//text for title box
var titleText = Ti.UI.createLabel({
	text: "Project 1",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: titleView
});
//text for main box
var mainText = Ti.UI.createLabel({
	text: "My favorite movies! Click next to start",
	font: {fontSize: 14},
	center: mainView
});
//text for next button
var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: nextView
});
//text for prev button
var prevText = Ti.UI.createLabel({
	text: "Previous",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: prevView
});

var loadFile = require("Functions");

//main code used to run the application
mainView.add(mainText);
titleView.add(titleText);
prevView.add(prevText);
nextView.add(nextText);
mainWindow.add(titleView, mainView, nextView);
mainWindow.open();

