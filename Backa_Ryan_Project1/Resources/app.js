//Ryan Backa
//VFW1501
//Project 1

Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	backgroundImage: "iphone/Default.png",
	backgroundRepeat: true,
	title: "My First Window"
});

var mainView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	//width: 100,
	height: 40,
	top: 20,
	left: 10,
	right: 10
});

var topView = Ti.UI.createView({
	backgroundColor: "#bdbdbd",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	top: mainView.top + mainView.height + 5,
	left:100,
	right: 100,
	bottom: 300
});

mainWindow.add(mainView, topView);
mainWindow.open();
