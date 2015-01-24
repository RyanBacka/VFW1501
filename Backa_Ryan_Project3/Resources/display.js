//function for the display window
var display = function(dataSource, platWidth){
	//creation of the display window
	var dispWindow = Ti.UI.createWindow({
		backgroundColor: "fff",
		backgroundRepeat: true,
		title: "Brewery Logo"
	});
	
	//view for the display window
	var imageView = Ti.UI.createView({
			backgroundColor:"#e8e8e8",
			top:20,
			left:0,
			width:platWidth,
			height:platWidth
		});
		
	//image for the display window	
	var newImage = Ti.UI.createImageView({
			image: dataSource
		});

	//creation of the close button to go back to the gallery window
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
		dispWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	//the adding of each section to the display window and the opening of the display window
	imageView.add(newImage);
	dispWindow.add(imageView, closeButton);
	dispWindow.open();
};
//exporting the function to the gallery window
exports.display = display;