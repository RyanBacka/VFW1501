//Ryan Backa
//VFW1501
//Project 1

Ti.UI.setBackgroundColor("#000");

var counter = 0;	
var movies = ["I am Legend","Rundown","Boondock Saints","Matrix","Wedding Crashers","Happy Gilmore"];
var i = movies.length;

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	backgroundRepeat: true,
	title: "My First Window"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	borderColor: "#000",
	//width: 100,
	height: 40,
	top: 20,
	left: 20,
	right: 20
});

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

var titleText = Ti.UI.createLabel({
	text: "Project 1",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: titleView
});

var mainText = Ti.UI.createLabel({
	text: movies[0],
	font: {fontSize: 14},
	center: mainView
});

var prevText = Ti.UI.createLabel({
	text: "Previous",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: prevView
});

var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial"},
	center: nextView
});

var nextFnc = function(){
	mainText.hide();
	if(counter<i){
		counter=counter+1;
		var nextMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		mainView.add(nextMainText);
	}else{
		counter=0;
		var nextMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		mainView.add(nextMainText);
	};
	mainWindow.add(prevView);
};

var prevFnc = function(){
	mainText.hide();
	if(counter<i){
		counter=counter-1;
		var prevMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		mainView.add(prevMainText);
	}else{
		counter=4;
		var prevMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		mainView.add(prevMainText);
	};
	
};

prevView.addEventListener("click", prevFnc);
nextView.addEventListener("click", nextFnc);
titleView.add(titleText);
mainView.add(mainText);
prevView.add(prevText);
nextView.add(nextText);
mainWindow.add(titleView, mainView, nextView);
mainWindow.open();
