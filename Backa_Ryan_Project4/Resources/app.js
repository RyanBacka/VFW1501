// Ryan Backa
//VFW 1501
//Project 4

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var border = Ti.UI.createView({
	top: 0,
	height:20,
	backgroundColor:"#cccccc"
});

var buttonsFile = require("buttons");


mainWin.add(border, buttonsFile.buttons);
mainWin.open();
