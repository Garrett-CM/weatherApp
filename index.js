    // fetch ('https://reqres.in/api/users')
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data.data[0])
    //     })

async function getData() { await fetch ('http://api.weatherapi.com/v1/current.json?key=4a2e77ab11604a74b5470137231308&q=Austin, TX&aqi=no')
                            .then(r => r.json())
                            .then(data => {
                                console.log(data);
                                console.log(data.location);
                                console.log(data.current);
                            })
                            
                        }

