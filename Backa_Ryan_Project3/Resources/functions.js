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
});

var galleryContainer = Ti.UI.createScrollView({
	top:0,
	width:platWidth,
	contentWidth: platWidth,
	backgroundColor: "#B0b0b0",
	height: platHeight-border.height-border.top,
	showVerticalScrollIndicator: true,
	layout:"horizontal"
});

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

galleryContainer.addEventListener("click", function(event){
	
	//console.log(event.source.image);
});

galleryWindow.add(border, galleryContainer);