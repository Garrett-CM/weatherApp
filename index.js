    // fetch ('https://reqres.in/api/users')
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data.data[0])
    //     })

//async call, distinct vaiables for the parsing
// async function getData() { 
//     const res = await fetch ('http://api.weatherapi.com/v1/current.json?key=4a2e77ab11604a74b5470137231308&q=Austin, TX&aqi=no');
//     let data = await res.json();
//     return data;
//                         };


//html var
const htmlLocation = document.getElementById('current-condition');
const htmlCurrent = document.getElementById('current-temp');
const htmlHigh = document.getElementById('temp-high');
const htmlLow = document.getElementById('temp-low');
const htmlAvg = document.getElementById('temp-avg');
const htmlWind = document.getElementById('wind');

//'long hand' verison test
let loc;
let cur;
//fetch data and update varaibles
fetch('http://api.weatherapi.com/v1/forecast.json?key=4a2e77ab11604a74b5470137231308&q=Austin&days=1&aqi=no&alerts=no')
    .then(function (responce){
        return responce.json();
    })
    .then(function (dataObj){
        console.log(dataObj.location);
        console.log(dataObj.current);

        locationData = dataObj.location;
        currentData = dataObj.current;
        forecastData = dataObj.forecast;

        htmlLocation.innerText = (`${locationData.name} state of ${locationData.region}`);
        htmlCurrent.innerText = (`Current Temp is ${currentData.temp_f}`);
        htmlHigh.innerText = (`${forecastData.forecastday[0].day.maxtemp_f}`);
        htmlLow.innerText = (`${forecastData.forecastday[0].day.mintemp_f}`);
        htmlAvg.innerText = (`${forecastData.forecastday[0].day.avgtemp_f}`);
        htmlWind.innerText = (`${forecastData.forecastday[0].day.maxwind_mph}`);
    })//catch error obj and alert
    .catch(function (error){
        console.log('Oh snap there is an issue');
        console.log( error );
    });
   


// trying to change UI after fetch
// htmlLocation.innerText = (`${loc.name}state of ${loc.region}`);
// htmlCurrent.innerText = (`Current Temp is ${cur.temp_f}`);
// htmlHigh.innerText = ('Working!');
// htmlLow.innerText = ('Working!');

// create data variable with await b/c the fetch is asnyc in console not script(?)
// let data = await getData();
//TO DO
// learn async handing 

