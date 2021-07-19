// after the page loads , runs this function  
window.addEventListener('load', ()=>{
    //DEFINING THE CORDINATES
    //longitude and latitude
     let long;
     let lat;
     let LocationTimeZone = document.querySelector(".weatherApp-location__timezone");
     let temperatureDegree = document.querySelector("#degree");
     let temperatureUnits = document.querySelector("#units");
     let temperatureDescription = document.querySelector("#description");



    //  if this thung's exsists in the brower
     if(navigator.geolocation){
        //  then we find the exact position of the user 
        navigator.geolocation.getCurrentPosition(location =>{
            console.log(location);
            // pull the information about your current/local longitude and latitude
            long = location.coords.longitude;
            lat = location.coords.latitude;

            //weather API + $variables we have already created lat and long (${lat}, ${long})
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2b31c8e8342c666095d41c25730cfc36`;
            console.log(api);

               // to get the information - uses get request which bassically getting information from the url above with our own custom lat and long
               fetch(api)
               // only after we fetch the api , then we can use its data
                   .then(fetchingResponse =>{
                       // this information will be converted in to json file
                       return fetchingResponse.json();                
                   })
               // after it has been converted in to a json file we acces it again
               .then(apiData =>{
                   console.log(apiData);
                //    because weather temperature is under Main: we acces Api data.main and I can pull out all the information in there
                //    This way we can avoid doing data.main.temp for every single property we want to pull out (modern ES)
                    const {temp} = apiData.main;
                    const {description} = apiData.weather[0];
                    const {country} = apiData.sys;
                    const {name} = apiData;

                    
                //Set DOM elments from API
                temperatureDescription.textContent = description;
                LocationTimeZone.textContent = name + ", " + country;
                // Because temperature in the API displayed in "Kelvin" I used formule -273.15 and display the number with no decimal points .toFixes(0) 
                temperatureDegree.textContent = (temp - 273.15).toFixed(0);               
               });
        });


         

     }else{
        //  message incase uanble to detect the location
         h3.textContent = "Hey, for this to work you need to allow your location or please update your browser"
     }

 
});