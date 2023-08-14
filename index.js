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


//'long hand' verison test
let loc;
let cur;

fetch('http://api.weatherapi.com/v1/current.json?key=4a2e77ab11604a74b5470137231308&q=Austin, TX&aqi=no')
    .then(function (responce){
        return responce.json();
    })
    .then(function (dataObj){
        console.log(typeof(loc));
        console.log(typeof(cur));
        console.log(dataObj.location);
        console.log(dataObj.current);
        loc = dataObj.location;
        cur = dataObj.current;
        console.log(typeof(loc));
        console.log(typeof(cur));
    })//catch error obj and alert
    .catch(function (error){
        console.log('Oh snap there is an issue');
        console.log( error );
    });
    
// create data variable with await b/c the fetch is asnyc in console not script(?)
// let data = await getData();
//TO DO
// learn async handing 

