const userInput = document.querySelector("#placeholder");
const button = document.querySelector("#btn");

let items = document.querySelector('#itemSection');
let cityname = document.querySelector("#city");
let weatherIcons = document.querySelector("#icon");
let weatherText = document.querySelector("#weatherState");

let humidityAmt = document.querySelector("#humidityAmt");
let windAmt = document.querySelector("#windAmt");


// https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}



button.addEventListener("click", function (e) {
  e.preventDefault();
  const key = "118d11310d398c7e1ae355b856104a0f";
  
  let response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${key}`
  )
    .then((info) => {
      return info.json();
    })
    .then((data) => {  
      //city name
      let iconCode = data.weather[0].icon;
      let iconUrl  = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      let names = document.createElement("div");
      let humi = document.createElement("div");
      let wnd = document.createElement("div");
      let condition = document.createElement("div");
      let img = document.createElement("img");
      //condition
      
      weatherIcons.innerHTML = "";

      weatherIcons.src = iconUrl;
      // items.src = weatherIcons
      console.log(img)
      condition.innerHTML = data.weather[0].main;
      weatherText.innerHTML = "";
      weatherText.appendChild(condition);

      //wind
      wnd.innerHTML = `${data.wind.speed} mph`;
      windAmt.innerHTML = "";
      windAmt.appendChild(wnd);

      //humidity
      humi.innerHTML = `${data.main.humidity} g/m3`;
      humidityAmt.innerHTML = "";
      humidityAmt.appendChild(humi);

      //cityname
      names.innerHTML = data.name;
      cityname.innerHTML = "";
      cityname.appendChild(names);
      
    })
    .catch((err) => {
      alert(err);
    });
    
});



