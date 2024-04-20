const express = require('express');
const mongoose = require("mongoose");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/templates/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

const startDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017"
    );

    console.log("DB connected")

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startDB();