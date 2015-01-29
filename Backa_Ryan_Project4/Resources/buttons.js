var buttons = function(){
	var randomView = Ti.UI.createView({
		height: "20%",
		top: border.height + 10,
		borderRadius:5,
		borderWidth:1,
		borderColor:"#000",
		backgroundColor:"#ccffcc"
	});
	
	var randomPicTxt = Ti.UI.createLabel({
		text:"Random Brew",
		textColor: "#006633",
		font: {fontSize:24, fontStyle: "bold", fontFamily: "Arial"}
	});
	
	
	var loadBrew = require("craftbrew");
	
	randomView.addEventListener("click", loadBrew.randomBrew);
	randomView.add(randomPicTxt);
	mainWin.add(randomView);
};
exports.buttons = buttons;