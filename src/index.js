const express = require("express");

const setupViewEngine = require('./config/viewEngine');
const routs = require('./routes');


const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routs);


app.listen(5000, () =>{
    console.log("Server is listening on port 5000...")
})