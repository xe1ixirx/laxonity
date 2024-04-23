const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const formRoute = require("./routes/mail.route.js")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs")

app.use('/home', formRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/public/templates/index.ejs'));
});

mongoose.connect("mongodb+srv://e1ixir:rBk2ki26lIXKnYkh@testcluster.ejd1ugy.mongodb.net/Mail?retryWrites=true&w=majority&appName=TestCluster")
.then(() => {
    console.log("Database connected!");
    app.listen(port);
      console.log('Server started at http://localhost:' + port);
    })
.catch(() => {
      console.log("Connection failed!")
    })
  

    