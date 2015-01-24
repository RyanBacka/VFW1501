//Ryan Backa
//VFW1501
//Project 3

var platWidth = Ti.Platform.displayCaps.platformWidth;
var platHeight = Ti.Platform.displayCaps.platforHeight;
var craftBrews = ["BelchinBeaver.jpeg","BigWood.jpeg","Bittereinder.jpg","boxingCat.jpg","breckenridge.jpg","Brooklyn.jpeg","Civilian.jpg","Daredevil.jpeg","DogfishHead.jpeg","Firefly.jpg","FlyingDog.jpeg"
,"Founders.jpg","GreatDivide.jpg","Grist.jpeg","hangar24.jpeg","HighCotton.png","imbibe.jpg","Intuition.jpg","Jackalope.png","JaggedMountain.jpg","JesterKing.png","kona.jpg","MOtherEarth.jpg","NewBelgium.jpg",
"NobleRey.jpg","Our.jpg","redhook.jpg","Shotwell.jpeg","Troegs.jpeg","University.jpeg"];
var margin = 10;
var trueWidth = (platWidth - 50)/4;
//var size = trueWidth/craftBrews.length;

//console.log(size);
console.log(trueWidth);

var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#fff",
	title: "Craft Brews",
	layout: "horizontal"
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

mainWindow.add(border, galleryContainer);
mainWindow.open();
