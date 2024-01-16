{/* <div>
                <img src="" alt="">
            </div>
            <h2>32 C</h2>
            <h4>clear</h4> */}
const API_KEY = `778b8a8b7f46f9c79c569ed46436a4d1`
const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")

// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather=async(city)=>{
    weather.innerHTML=`<h2>Loading....<h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url);//waits for sometime and then fetch the url
    const data=await response.json()//gives the only important data
    return showWeather(data)
}

const showWeather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h2>City Not Found</h2>`
    }
    console.log(data)
    weather.innerHTML=` <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>${data.main.temp}</h2>
<h4>${data.weather[0].main}</h4>
</div>`
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();//stops quick loading as soon as entered the value//
    }
)
