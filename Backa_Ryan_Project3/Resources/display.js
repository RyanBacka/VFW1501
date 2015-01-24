//function for the second window
var display = function(){
	//creation of the second window
	var dispWindow = Ti.UI.createWindow({
		backgroundColor: "fff",
		backgroundRepeat: true,
		title: "Definition"
	});
	
	//title for the second window
	var dispView = Ti.UI.createView({
		top: 100,
		height: platHeight/3,
		width: platWidth,
		backgroundColor:"#bdbdbd"
	});

	
	
	//creation of the close button to go back to the main window
	var closeButton = Ti.UI.createLabel({
		text: "< Back",
		backgroundColor:"#d8d8d8",
		color:"#fff",
		height:30,
		font: {fontSize: 14, fontFamily: "Arial"},
		width:"100%",
		bottom:0,
		textAlign:"center"
	});
	
	var closeWindow = function(){
		descWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	//the adding of each section to the second window and the opening of the second window
	descTitleView.add(descTitleText);
	descWindow.add(descTitleView, descText, closeButton);
	descWindow.open();
};

exports.definition = definition;