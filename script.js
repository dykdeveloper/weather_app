const weatherApiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&appid=fc9bd14bed87b3343fd4d9729b6b79b3&units=metric";

    

      document.addEventListener("click", () => {
        const city = document.getElementById("text").value;
        const api = `${weatherApiUrl}&q=${city}`;

        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            const wdata = data;
            
            const icon = wdata.weather[0].icon;
            const imageurl = "https://openweathermap.org/img/wn/";
            const imageurl1 = `${imageurl}${icon}@2x.png`;
            
            document.getElementById("imgpng").innerHTML = `<img src=${imageurl1} alt="image">`;
            document.getElementById("wtemp").innerHTML = Math.round(wdata.main.temp) + "°C";
            document.getElementById("city").innerHTML = wdata.name;
            document.getElementById("hum1").innerHTML = `<i class="fa-solid fa-wind"></i><p>${wdata.wind.speed} Km/h</p>`;
            document.getElementById("hum2").innerHTML = `<i class="fa-solid fa-water"></i><p>${wdata.main.humidity} %</p>`;
            document.getElementById("hd").innerHTML = "Humdity";
            document.getElementById("wd").innerHTML = "Wind Speed";

          });
      });