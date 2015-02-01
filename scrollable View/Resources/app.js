var win = Ti.UI.createWindow({
  backgroundColor:'white'
});

function createRow(i) {
  var row = Ti.UI.createView({
    backgroundColor: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    width:'100%', height: 70,
    top: 0, left: 0
  });

  row.add(inputTextField);
  return row;
}

var scrollView = Ti.UI.createScrollView({
  bottom:120,
  contentHeight: 'auto',
  layout: 'vertical'
});

for(var i = 0; i <= 20; i++){
var row = createRow(i);
  scrollView.add(row);
}
win.add(scrollView);

win.add(label);
win.open();