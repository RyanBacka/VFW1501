var definition = function(){
	var descWindow = Ti.UI.createWindow({
		backgroundColor: "fff",
		backgroundRepeat: true,
		title: "Definition"
	});
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
	
	var descText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Arial"},
		color: "#000",
		top: descTitleView.top + descTitleView.height + 30,
		left:10,
		right:10,
	});
	
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
	
	descTitleView.add(descTitleText);
	descWindow.add(descTitleView, descText, closeButton);
	descWindow.open();
};

exports.definition = definition;