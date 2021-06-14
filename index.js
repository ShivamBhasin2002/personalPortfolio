const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log(process.env.PORT || 3000);
    console.log("!!SERVER STARTED!!");
});