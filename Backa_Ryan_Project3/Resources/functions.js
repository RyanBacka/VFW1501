var gallery = function(){
	var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	var craftBrews = imagesFolder.getDirectoryListing();
	var platWidth = Ti.Platform.displayCaps.platformWidth;
	var platHeight = Ti.Platform.displayCaps.platformHeight;
	var margin = 10;
	var trueWidth = (platWidth - 50)/4;
	
	var galleryWindow = Ti.UI.createWindow({
		backgroundColor:"#fff",
		title: "Home Screen",
	});
	
	var border = Ti.UI.createView({
		backgroundColor: "#ffffff",
		height: 1,
		width: platWidth,
		top:20,
		align:"top"
	});
	
	var galleryContainer = Ti.UI.createScrollView({
		top:20,
		width:platWidth,
		contentWidth: platWidth,
		backgroundColor: "#B0b0b0",
		height: platHeight-border.height-border.top,
		showVerticalScrollIndicator: true,
		layout:"horizontal",
		bottom:35
	});
	
	console.log(galleryContainer.height);
	
	/*var mainImageView = function(){
		
	};*/
	
	for(var i=0;i<craftBrews.length; i++){
		var imageView = Ti.UI.createView({
			backgroundColor:"#e8e8e8",
			top:margin,
			left:margin,
			width:trueWidth,
			height:trueWidth
		});
		var newImage = Ti.UI.createImageView({
			image: "images/"+ craftBrews[i]
		});
		imageView.add(newImage);
		galleryContainer.add(imageView);
	};
	var loadDisplay = require("display");
	
	galleryContainer.addEventListener("click", function(event){
		loadDisplay.display(event.source.image);
		//console.log(event.source.image);
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
		galleryWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	
	galleryWindow.add(galleryContainer, border, closeButton);
	galleryWindow.open();
};
exports.gallery = gallery;