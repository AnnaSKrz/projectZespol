fetch("https:api.openweathermap.org/data/2.5/weather?q=Katowice&appid=35d619a1807b5147986aba2eba029146")
    .then( resp => resp.json())
    .then( data => {
        console.log(data)
                document.getElementById("output").innerText = parseInt(data.main.temp - 273.15);
    })