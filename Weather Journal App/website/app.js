// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey='&appid=bd5a6e47e74a553dbafe3f573111ec79&units=imperial';
const baseURL= 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
const zipCode =  document.getElementById('zip').value;
const feeling=document.getElementById('feelings').value;
getTemp(baseURL,zipCode, apiKey)
.then(function(data){
    postData('/addWeather',{temp: data.main.temp, date: newDate, content:feeling});

    updateUI();
});
};
/* Function to GET Web API Data*/
const getTemp = async (baseURL, code, key)=>{

    const res = await fetch(baseURL+code+key)
    try {
  
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
    }
};
/* Function to POST data */
const postData = async ( url = '', data = {})=>{

      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),    
    });

      try {
        const newData = await response.json();
               return newData
      }catch(error) {
      console.log("error", error);
      }
  };


/* Function to GET Project Data */
const updateUI = async () =>{ 
    const request = await fetch('/all');
    try {
    const allData = await request.json();
    document.getElementById('temp').innerHTML =allData.temp;
    document.getElementById('date').innerHTML =allData.date;
    document.getElementById('content').innerHTML =allData.content;
    }
    catch(error) {
      console.log("error", error);
    }
  };
 
