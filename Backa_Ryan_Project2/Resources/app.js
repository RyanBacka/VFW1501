//Ryan Backa
//VFW1501
//Project 2

//create new window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "fff",
	backgroundRepeat: true,
	title: "Well Testing Equipment"
});

//creation of title 
var titleView = Ti.UI.createView({
	top: 20,
	height: 40,
	backgroundColor:"#d8d8d8"
});

var titleText = Ti.UI.createLabel({
	text: "Well Testing Equipment Terms and Definitions",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	color: "#fff",
	center: titleView
});

//load JSON file to app.js
var loadFile = require("JSON");

//creation of header and footer for both tables plus style for each
var equipHeader = Ti.UI.createView({
	height:50,
	backgroundColor: "#bdbdbd"
});

var equipHeadText =Ti.UI.createLabel({
	text: loadFile.data.equipNames.headTitle,
	font: {fontSize: 14, fontFamily: "Arial"},
	color:"#fff"
});

equipHeader.add(equipHeadText);

var equipFoot = Ti.UI.createView({
	height:30,
	backgroundColor: "#d8d8d8"
});

var equipFootText = Ti.UI.createLabel({
	text: loadFile.data.equipNames.footTitle,
	font: {fontSize: 14, fontFamily: "Arial"},
	color:"#fff"
});

equipFoot.add(equipFootText);

var partsHeader = Ti.UI.createView({
	height:50,
	backgroundColor: "#bdbdbd"
});

var partsHeadText =Ti.UI.createLabel({
	text: loadFile.data.equipParts.headTitle,
	font: {fontSize: 14, fontFamily: "Arial"},
	color:"#fff"
});

partsHeader.add(equipHeadText);

var partsFoot = Ti.UI.createView({
	height:30,
	backgroundColor: "#d8d8d8"
});

var partsFootText = Ti.UI.createLabel({
	text: loadFile.data.equipParts.footTitle,
	font: {fontSize: 14, fontFamily: "Arial"},
	color:"#fff"
});

partsFoot.add(partsFootText);

//creation of tables and sections
var termsTable = Ti.UI.createTableView({
	top: titleView.top+titleView.height
});

var equipmentSection = Ti.UI.createTableViewSection({
	headerView: equipHeader,
	footerView: equipFoot
});

var partsSection = Ti.UI.createTableViewSection({
	headerView: partsHeader,
	footerView: partsFoot
});

var termsSections = [equipmentSection, partsSection];

//loading our file for our second window
var loadDesc = require("DescWindow");

//creation of rows in tabe plus events to each row
for(var i=0, j=loadFile.data.equipNames.termsTest.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: loadFile.data.equipNames.termsTest[i].equip,
		desc: loadFile.data.equipNames.termsTest[i].desc,
		hasChild:true
	});
	equipmentSection.add(row);
	row.addEventListener("click", loadDesc.definition);
};

for(var i=0, j=loadFile.data.equipNames.termsTest.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title:loadFile.data.equipParts.partsTest[i].equip,
		desc:loadFile.data.equipParts.partsTest[i].desc,
		hasChild:true
	});
	partsSection.add(row);
	row.addEventListener("click", loadDesc.definition);
};

//setting the data for the tables
termsTable.setData(termsSections);

//adding sections to the main window and the running of the main window
titleView.add(titleText);
mainWindow.add(titleView, termsTable);
mainWindow.open();