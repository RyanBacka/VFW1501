//Ryan Backa
//VFW1501
//Project 3

var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#fff",
	title: "Home Screen",
});

var loadGallery = require("functions");

//creation of the next button
var openView = Ti.UI.createView({
	backgroundColor: "#5FFB17",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	width: "50%",
	height:"10%",
	align:"center"
});

//text for next button
var openText = Ti.UI.createLabel({
	text: "Open Gallery",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: openView
});

var loadGallery = require("functions");

openView.addEventListener("click", loadGallery.gallery);
openView.add(openText);
mainWindow.add(openView);
mainWindow.open();
