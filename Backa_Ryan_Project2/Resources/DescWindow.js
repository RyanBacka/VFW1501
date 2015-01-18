//function for the second window
var definition = function(){
	//creation of the second window
	var descWindow = Ti.UI.createWindow({
		backgroundColor: "fff",
		backgroundRepeat: true,
		title: "Definition"
	});
	
	//title for the second window
	var descTitleView = Ti.UI.createView({
		top: 20,
		height: 40,
		backgroundColor:"#bdbdbd"
	});
	
	var descTitleText = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 24, fontFamily: "Arial", fontWeight: "bold"},
		color: "#fff",
		center: titleView
	});
	
	//text defining the terms from the first window
	var descText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		color: "#000",
		top: descTitleView.top + descTitleView.height + 30,
		left:10,
		right:10,
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