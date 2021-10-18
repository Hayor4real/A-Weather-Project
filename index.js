const input = document.querySelector("input")
const addButton = document.querySelector("button")
const cards = document.querySelector(".cards")


addButton.addEventListener("click", function(){
    city = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.hot_key}`)
    .then(res => res.json())
    .then(data => 
        {console.log(data)
        cards.innerHTML = `<div class="card-content">
        <div class="card-content">
        <img src=${`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        <div class=info>
        <h1>${city}</h1>
        <h2>${data.weather[0].description}</h2>
        <h3>humidity: ${data.main.humidity}%</h3>
        <h3>Pressure: ${data.main.pressure}</h3>
        </div>
        <p class="large">${data.main.temp}</p>
        </div>
        </div>`
        })

        input.value = ""
})

