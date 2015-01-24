//Ryan Backa
//VFW1501
//Project 3

//creation of the main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#fff",
	title: "Home Screen",
});

//loading of the function file and gallery function
var loadGallery = require("functions");

//creation of the open gallery button
var openView = Ti.UI.createView({
	backgroundColor: "#5FFB17",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	width: "50%",
	height:"10%",
	align:"center"
});

//text for open gallery button
var openText = Ti.UI.createLabel({
	text: "Open Gallery",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: openView
});

//adding event listener to the gallery button
openView.addEventListener("click", loadGallery.gallery);

//adding text to the open button, the open button to the window and opening the window
openView.add(openText);
mainWindow.add(openView);
mainWindow.open();
