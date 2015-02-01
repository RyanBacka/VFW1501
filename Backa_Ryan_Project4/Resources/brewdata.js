var dataPage = function(){
	var dataWindow = Ti.UI.createWindow({
		backgroundColor:"#cc6600"
	});	
	
	//load JSON file to app.js
	var loadFile = require("JSON");
	
	//creation of header and footer for my table
	var craftHeader = Ti.UI.createView({
		height:50,
		top:20,
		backgroundColor: "#bdbdbd"
	});
	
	var craftHeadText =Ti.UI.createLabel({
		text: loadFile.data.craftBrewNames.headTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	craftHeader.add(craftHeadText);
	
	var craftFoot = Ti.UI.createView({
		height:30,
		bottom:30,
		backgroundColor: "#d8d8d8"
	});
	
	var craftFootText = Ti.UI.createLabel({
		text: loadFile.data.craftBrewNames.footTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	craftFoot.add(craftFootText);
	
	//creation of table and section
	var brewTable = Ti.UI.createTableView({
		top:20,
		bottom:40
	});
	
	var craftSection = Ti.UI.createTableViewSection({
		headerView: craftHeader,
		footerView: craftFoot
	});
	
	var craftSections = [craftSection];
	
	//attempted to pull in another array inside of JSON based on the first array unsuccessfully
	var beerAlc = function(){
		var beerTable = createTableView({
			top:20
		});
		
		if ( loadFile.data.craftBrewNames.favBrew[i].aName= loadFile.data.craftBrewNames.breweries[i]){ 
			var row = Ti.UI.createTableViewRow({
				title: loadFile.data.craftBrewNames.breweries[i].beer,
				desc: loadFile.data.craftBrewNames.brooklynBrew[k].alcCont,
				hasChild:false
			});
		};
	};
	
	//creation of rows in tabe plus events to each row
	for(var i=0, j=loadFile.data.craftBrewNames.favBrew.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadFile.data.craftBrewNames.favBrew[i].brew,
			hasChild:true
		});
		console.log(loadFile.data.craftBrewNames.breweries[i]);
		craftSection.add(row);
		row.addEventListener("click", beerAlc);
	};
	
	//creation of the close button to go back to the main window
	var closeButton = Ti.UI.createLabel({
		text: "< Back",
		backgroundColor:"#bdbdbd",
		color:"#000",
		height:30,
		font: {fontSize: 14, fontFamily: "Arial"},
		width:"100%",
		bottom:0,
		textAlign:"center"
	});
	
	var closeWindow = function(){
		dataWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	brewTable.setData(craftSections);
	dataWindow.add(brewTable,closeButton);
	dataWindow.open();
};

exports.dataPage = dataPage;