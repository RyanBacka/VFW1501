var info = function(){
	var win = Ti.UI.createWindow({
	  backgroundColor: '#33ccff'
	});
	
	var infoView = Ti.UI.createView({
		top:20,
		height:60,
		width:250
	});
	
	var infoText = Ti.UI.createLabel({
		text:"Enter a brewery you would like more info on.",
		font: {fontSize: 14, fontFamily:"Arial"}
	});
	
	var infoField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
		backgroundColor:"white",
		color: '#336699',
		top: infoView.top+infoView.height+10,
		width: 250,
		height: 30,
		hintText:"Enter Here",
	});
	
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
	
	infoButton.add(submitText);
	infoView.add(infoText);
	win.add(infoField,infoView,infoButton);
	win.open();
};

exports.info = info;