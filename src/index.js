const express = require("express");

const viewEngine = require('./config/viewEngine');
const routs = require('./routes');


const app = express();
viewEngine(app);


