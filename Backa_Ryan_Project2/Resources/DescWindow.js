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
		text: "Well Testing Equipment Terms and Definitions",
		font: {fontSize: 14, fontFamily: "Arial"},
		color: "#fff",
		center: titleView
	});
	
	descTitleView.add(descTitleText);
	descWindow.add(descTitleView);
};