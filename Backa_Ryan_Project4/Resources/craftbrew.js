var randomBrew = function(){
	var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	var craftBrews = imagesFolder.getDirectoryListing();
	var index = Math.round((craftBrews.length-1)*Math.random());
	
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	console.log(index);
	
	var imageContainer = Ti.UI.createView({
		backgroundColor:"f0f8ff",
		top:20
	});

	
	var newImage = Ti.UI.createImageView({
			image: "images/"+craftBrews[index]
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
		newWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
		
	imageContainer.add(newImage);
	newWindow.add(imageContainer, closeButton);
	newWindow.open();
};

exports.randomBrew = randomBrew;