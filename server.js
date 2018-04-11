var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/static')));
//app.set('views', path.join(__dirname, './client/views'));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, ()=>{
    console.log("listening on port 8000");
})
