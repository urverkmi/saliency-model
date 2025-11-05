// phantomjs capture
var page = require('webpage').create();
var url = 'http://localhost:8000/index.html'; // or your local file path

page.open(url, function() {
  page.render('screenshot.png');
  console.log('Screenshot saved as screenshot.png');
  phantom.exit();
});
