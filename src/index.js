const express = require("express");

const viewEngine = require('./config/viewEngine');
const routs = require('./routes');


const app = express();
viewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routs);


app.listen(5000, () =>{
    console.log("Server is listening on port 5000...")
})