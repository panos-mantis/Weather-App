const output=document.getElementById("output")
const btn = document.getElementById("button")
const input = document.getElementById("getLocation")


function getDataFromApi(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a85a6faa8dac1a8f6c9075bce522720a&units=metric`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        output.innerHTML= `<h1>${data.name}</h1> <p>Temperature : ${data.main.temp}</p> <p>Feels like : ${data.main.feels_like}</p>`
        if(data.weather[0].main==="Clouds"){
            output.innerHTML +=`<p> <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-cloudy" viewBox="0 0 16 16">
            <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973zM8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 5.5z"/>
          </svg> </p>`
        } else if(data.weather[0].main==="Clear"){
            output.innerHTML +=` <p> <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
          </svg></p> `
        } 
    })
}


btn.addEventListener("click", function(){
   const AskedLocation=input.value 
   getDataFromApi(AskedLocation)
   input.value=""
})
getDataFromApi("rome")


