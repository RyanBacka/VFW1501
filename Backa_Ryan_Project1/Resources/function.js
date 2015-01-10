var counter = 0;	
var i = movies.length;

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
