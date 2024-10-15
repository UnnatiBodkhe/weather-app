const apiKey="06e97c08e6489d26b32bc33bb845778d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
let   weatherIcon =document.querySelector(".weatherIcon");


async function checkweather(city)
{

    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
 if(data.weather[0].main=="Clouds")
 {
    weatherIcon.src ="6mon_internship/project1weather/images/clouds.png"
 }
 else if(data.weather[0].main=="Clear")
    {
       weatherIcon.src ="6mon_internship/project1weather/images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle")
        {
           weatherIcon.src ="6mon_internship/project1weather/images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist")
            {
               weatherIcon.src ="6mon_internship/project1weather/images/mist.png"
            }
            else if(data.weather[0].main=="Snow")
                {
                   weatherIcon.src ="6mon_internship/project1weather/images/snow.png"
                }
                else if(data.weather[0].main=="Rain")
                    {
                       weatherIcon.src ="6mon_internship/project1weather/images/rain.png"
                    }
                    document.querySelector(".weather").style.display="block"


}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})
