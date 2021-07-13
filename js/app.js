// after the page loads , runs this function  
window.addEventListener('load', ()=>{
    //DEFINING THE CORDINATES
    //longitude and latitude
     let long;
     let lat;

    //  if this thung's exsists in the brower
     if(navigator.geolocation){
        //  then we find the exact position of the user 
        navigator.geolocation.getCurrentPosition(location =>{
            console.log(location);
            // pull the information about your current/local longitude and latitude
            long = location.coords.longitude;
            lat = location.coords.latitude;

            //weather API + $variables we have already created lat and long (${lat}, ${long})
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=258a58c2ebeb6c98b8e5994e61ed0038`;
            console.log(api);

               // to get the information - uses get request which bassically getting information from the url above with our own custom lat and long
               fetch(api)
               // only after we fetch the api , then we can use its data
                   .then(fetchingResponse =>{
                       // this information will be converted in to json file
                       return response.json();                
                   })
               // after it has been converted in to a json file
               .then(apiData =>{
                   console.log(apiData);
                   const {} = data.currently;
                   
               });
   
        });
         

     }else{
        //  message incase uanble to detect the location
         h3.textContent = "Hey, for this to work you need to allow your location or please update your browser"
     }

});