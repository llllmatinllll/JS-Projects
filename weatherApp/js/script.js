let $ = document;
let searchBtn = $.getElementById("search");
let searchBar = $.querySelector(".search-bar");
let rn = Math.floor(Math.random() * 20);
let appData = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "5f6e580d7b255527dfe4c2d86c1b26c5",
};
let wallpapers = [
    "url(../assets/w1.jpg)",
    "url(../assets/w2.jpg)",
    "url(../assets/w3.jpg)",
    "url(../assets/w4.jpg)",
    "url(../assets/w5.jpg)",
    "url(../assets/w6.jpg)",
    "url(../assets/w7.jpg)",
    "url(../assets/w8.jpg)",
    "url(../assets/w9.jpg)",
    "url(../assets/w10.jpg)",
    "url(../assets/w11.jpg)",
    "url(../assets/w12.jpg)",
    "url(../assets/w13.jpg)",
    "url(../assets/w14.jpg)",
    "url(../assets/w15.jpg)",
    "url(../assets/w16.jpg)",
    "url(../assets/w17.jpg)",
    "url(../assets/w18.jpg)",
    "url(../assets/w19.jpg)",
    "url(../assets/w20.jpg)",
];
let wallpaper = () => {
    $.body.style.background = wallpapers[rn];
    $.body.style.backgroundSize = "cover";
};
wallpaper();
let weatherCard = (city) => {
    $.querySelector(".weather").classList.remove("loading");
    $.querySelector(".city").innerHTML = city.city;
    $.querySelector(".temp").innerHTML = city.temp + "°C";
    $.querySelector(".description").innerHTML = city.weather;
    $.querySelector(".humidity").innerHTML = "Humidity: " + city.humidity + "%";
    $.querySelector(".wind").innerHTML =
        "Wind speed: " + city.windSpeed + "km/h";
};

let getQueries = (city) => {
    console.clear();
    fetch(`${appData.url}${city}&&appid=${appData.key}`)
        .then((res) => res.json())
        .then((data) => {
            let temp = data.main.temp;
            temp = temp - 273.15;
            $.querySelector(".weather").classList.remove("loading");
            $.querySelector(".city").innerHTML =
                data.name + ` (${data.sys.country})`;
            $.querySelector(".temp").innerHTML = Math.floor(temp) + " °C";
            let description = data.weather[0].main;
            $.querySelector(".description").innerHTML = description;
            $.querySelector(".humidity").innerHTML =
                "Humidity: " + data.main.humidity + "%";

            console.log(description.toLowerCase());
            
        });
};

searchBtn.addEventListener("click", () => {
    let searchBarValue = searchBar.value;
    getQueries(searchBarValue);
});

searchBar.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        let searchBarValue = searchBar.value;
        getQueries(searchBarValue);
    }
});
