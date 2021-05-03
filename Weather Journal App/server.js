//the projectdata
let projectData ={};
//Express to run server and routes
const express = require("express");

//Startup an instance of app
const app = express();

/*Dependencies*/
const bodyParser = require("body-parser");
/*Middleware*/
//Configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

//Intialize the main project folder
app.use(express.static('website'));

const port=8000;

//spin up the server
app.listen(port,listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// Callback function to complete GET '/all'
app.get('/all',getData);

function getData(req,res){
    res.send(projectData);
}
// Post Route
app.post('/addWeather',addData);

function addData(req,res){
    projectData.temp=req.body.temp;
    projectData.date=req.body.date;
    projectData.content= req.body.content;
    console.log(projectData);
}