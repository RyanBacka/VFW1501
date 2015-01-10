var movies = ["I am Legend","Rundown","Boondock Saints","Matrix","Wedding Crashers","Happy Gilmore"];
var i = movies.length;
var nextMainText;
var prevMainText;
i=i-1;

//function for the next button
var nextFnc = function(){
	mainView.hide();
	if(counter<i){
		var nextMainView = Ti.UI.createView({
				backgroundColor: "#bdbdbd",
				borderRadius: 5,
				borderWidth: 1,
				borderColor: "#000",
				top: titleView.top + titleView.height + 5,
				left:20,
				right: 20,
				height:400
		});
		var nextMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		counter=counter+1;
		nextMainView.add(nextMainText);
		mainWindow.add(nextMainView);
	}else{
		counter=0;
		var nextMainView = Ti.UI.createView({
				backgroundColor: "#bdbdbd",
				borderRadius: 5,
				borderWidth: 1,
				borderColor: "#000",
				top: titleView.top + titleView.height + 5,
				left:20,
				right: 20,
				height:400
		});
		var nextMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		nextMainView.add(nextMainText);
		mainWindow.add(nextMainView);
	};
	mainWindow.add(prevView);
};

//function for the prev button
var prevFnc = function(){
	mainText.hide();
	if(counter>0){
		counter=counter-1;
		var prevMainView = Ti.UI.createView({
				backgroundColor: "#bdbdbd",
				borderRadius: 5,
				borderWidth: 1,
				borderColor: "#000",
				top: titleView.top + titleView.height + 5,
				left:20,
				right: 20,
				height:400
		});
		var prevMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		prevMainView.add(prevMainText);
		mainWindow.add(prevMainView);
	}else{
		counter=4;
		var prevMainView = Ti.UI.createView({
				backgroundColor: "#bdbdbd",
				borderRadius: 5,
				borderWidth: 1,
				borderColor: "#000",
				top: titleView.top + titleView.height + 5,
				left:20,
				right: 20,
				height:400
		});
		var prevMainText = Ti.UI.createLabel({
			text: movies[counter],
			font: {fontSize: 14},
			center: mainView
		});
		prevMainView.add(prevMainText);
		mainWindow.add(prevMainView);
	};
};

//event listeners
prevView.addEventListener("click", prevFnc);
nextView.addEventListener("click", nextFnc);