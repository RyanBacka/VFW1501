var randomBrew = function(){
	var craftBrews = imagesFolder.getDirectoryListing();
	var index = Math.round((craftBrews.length-1)*Math.random());
	
	console.log(index);
	
	var newImage = Ti.UI.createImageView({
			image: dataSource
		});
};

exports.randomBrew = randomBrew;