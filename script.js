
// Weahter API
const getWeather =  (city) => {
    Cityname.innerHTML = city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d19a0e727msh0a480e20577f653p130592jsn24e9eebb4f46',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => { console.log(response)
    
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        


     })
    .catch(error => console.error(error));
    }
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        getWeather(city.value);
    })

// for London
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d19a0e727msh0a480e20577f653p130592jsn24e9eebb4f46',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
    .then(response => response.json())
    .then(response => { console.log(response)
        london_temp.innerHTML = response.temp
        london_feels_like.innerHTML = response.feels_like
        london_humidity.innerHTML = response.humidity
        london_max_temp.innerHTML = response.max_temp
        london_min_temp.innerHTML = response.min_temp
        london_sunrise.innerHTML = response.sunrise
        london_sunset.innerHTML = response.sunset
        london_wind_degrees.innerHTML = response.wind_degrees
        london_wind_speed.innerHTML = response.wind_speed

     })
     .catch(error => console.error(error));

     //for Paris
     {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7d19a0e727msh0a480e20577f653p130592jsn24e9eebb4f46',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris', options)
       .then(response => response.json())
       .then(response => { console.log(response)
            paris_temp.innerHTML = response.temp
            paris_feels_like.innerHTML = response.feels_like
            paris_humidity.innerHTML = response.humidity
            paris_max_temp.innerHTML = response.max_temp
            paris_min_temp.innerHTML = response.min_temp
            paris_sunrise.innerHTML = response.sunrise
            paris_sunset.innerHTML = response.sunset
            paris_wind_degrees.innerHTML = response.wind_degrees
            paris_wind_speed.innerHTML = response.wind_speed
         })
        .catch(error => console.error(error));
     }

    //for New York
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7d19a0e727msh0a480e20577f653p130592jsn24e9eebb4f46',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
       .then(response => response.json())
       .then(response => { console.log(response)
            newyork_temp.innerHTML = response.temp
            newyork_feels_like.innerHTML = response.feels_like
            newyork_humidity.innerHTML = response.humidity
            newyork_max_temp.innerHTML = response.max_temp
            newyork_min_temp.innerHTML = response.min_temp
            newyork_sunrise.innerHTML = response.sunrise
            newyork_sunset.innerHTML = response.sunset
            newyork_wind_degrees.innerHTML = response.wind_degrees
            newyork_wind_speed.innerHTML = response.wind_speed
         })
        .catch(error => console.error(error));
     }

     //for Tokyo
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7d19a0e727msh0a480e20577f653p130592jsn24e9eebb4f46',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
       .then(response => response.json())
       .then(response => { console.log(response)
            tokyo_temp.innerHTML = response.temp
            tokyo_feels_like.innerHTML = response.feels_like
            tokyo_humidity.innerHTML = response.humidity
            tokyo_max_temp.innerHTML = response.max_temp
            tokyo_min_temp.innerHTML = response.min_temp
            tokyo_sunrise.innerHTML = response.sunrise
            tokyo_sunset.innerHTML = response.sunset
            tokyo_wind_degrees.innerHTML = response.wind_degrees
            tokyo_wind_speed.innerHTML = response.wind_speed
         })
        .catch(error => console.error(error));
     }

     getWeather('Lahore'); 
