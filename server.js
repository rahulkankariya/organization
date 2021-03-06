// const dotnnev= require('dotenv').config()
const express = require("express");
// const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json()); 
const {mangose} = require("./app/config/db.config");
// simple route
require('./app/routes/organization.routes')(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});