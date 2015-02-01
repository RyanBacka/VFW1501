var info = function(){
	var win = Ti.UI.createWindow({
	  backgroundColor: '#33ccff'
	});
	//create view telling user what to enter
	var infoView = Ti.UI.createView({
		top:20,
		height:60,
		width:250
	});
	
	var infoText = Ti.UI.createLabel({
		text:"Enter a brewery you would like more info on.",
		font: {fontSize: 14, fontFamily:"Arial"}
	});
	
	//create text field to enter info
	var infoField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
		backgroundColor:"white",
		color: '#336699',
		top: infoView.top+infoView.height+10,
		width: 250,
		height: 30,
		hintText:"Enter Here",
	});
	
	//create button to submit info
	var infoButton = Ti.UI.createButton({
		backgroundColor:"#5ffb17",
		heighgt:50,
		width:175,
		top:infoField.top+infoField.height+10,
		borderWidth:1,
		borderRadius:5,
		borderColor:"white",
	});
	
	var submitButton = function(){
		var textVal = infoField.value;
		alert("You would like more information on "+textVal+" brewery. The creator will research and get back to you.");
	};
	
	var submitText = Ti.UI.createLabel({
		text:"Submit",
		align:"center"
	});
	
	infoButton.addEventListener("click", submitButton);
	
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
		win.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	infoButton.add(submitText);
	infoView.add(infoText);
	win.add(infoField,infoView,infoButton,closeButton);
	win.open();
};

exports.info = info;