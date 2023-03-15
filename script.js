let weather = {
    apiKey: "c7cb0ae3f9bc09b17db889698a8062c9",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const {icon, description} = data.weather[0];
        const {temp, feels_like, humidity} = data.main;
        const {speed} = data.wind
        console.log(name,icon,description,temp,feels_like,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name + "   " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "wind-speed:" + speed + "km/h";
        
        
    },   
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function () {
    if (event.key == "Enter") {
        weather.search();
    }
    });
