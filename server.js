var Express = require('express');
var Path = require('path');

// App
var app = Express();

// sending the main page of the app
app.get('*', function (req, res) {
    res.sendFile(Path.join(__dirname, './index.html'));
});

app.listen(8080, function(){
    console.log("Listening on port 8080");
});
