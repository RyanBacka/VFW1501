var dataPage = function(){
	var dataWindow = Ti.UI.createWindow({
		backgroundColor:"#cc6600"
	});	
	
	//load JSON file to app.js
	var loadFile = require("JSON");
	
	//creation of header and footer for both tables plus style for each
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
		bottom:20,
		backgroundColor: "#d8d8d8"
	});
	
	var craftFootText = Ti.UI.createLabel({
		text: loadFile.data.craftBrewNames.footTitle,
		font: {fontSize: 14, fontFamily: "Arial"},
		color:"#fff"
	});
	
	craftFoot.add(craftFootText);
	
	//creation of tables and sections
	var brewTable = Ti.UI.createTableView({
		top:20
	});
	
	var craftSection = Ti.UI.createTableViewSection({
		headerView: craftHeader,
		footerView: craftFoot
	});
	
	var craftSections = loadFile.data.favBrew;
	
	//creation of rows in tabe plus events to each row
	for(var i=0, j=loadFile.data.craftBrewNames.favBrew.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadFile.data.craftBrewNames.favBrew[i],
			hasChild:true
		});
		craftSection.add(row);
	};
	dataWindow.add(craftHeader,craftFoot,craftSection);
	dataWindow.open();
};

exports.dataPage = dataPage;