const express = require("express");

const setupViewEngine = require('./config/viewEngine');
const initDatabase = require("./database/databaseInit");
const routs = require('./routes');


const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routs);

initDatabase().
then(app.listen(5000, () =>{
    console.log("Server is listening on port 5000...")
}))
.catch((err) => console.log(err.message));