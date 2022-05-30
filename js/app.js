

const api = () =>{
    fetch('http://api.weatherstack.com/current?access_key=87d445a050e6c0bbb9e7b6e680f31188&query=Dhaka')
    .then(res => res.json())
    .then(data => console.log(data))
}

// 

document.getElementById('search-weather').addEventListener('click', function(){
    let location = document.getElementById('location').value;
    location = location.split(" ");
    location = location.join("%20");
    location = capitalizeFirstLetter(location);
    let url = `http://api.weatherstack.com/current?access_key=87d445a050e6c0bbb9e7b6e680f31188&query=${location}`;
    console.log(url);
    // let weatherDescription =  location;

    
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        let weather = data.current;
        let div = document.createElement('div');

        div.innerHTML= `
        <div>
                <h1 class="text-center text-white bg-secondary bg-opacity-50 p-3">${data.location.name}</h1>
            <div class="bg-weather text-white fw-bold rounded">
                            
                <h1 class="text-center"><span>${weather.temperature}</span>°C</h1>
                <h5 class="text-center"><img src="${weather.weather_icons[0]}" alt=""> ${weather.weather_descriptions[0]}</h5>
                <h6 class="text-center fst-italic mt-5"><i class="fa-solid fa-temperature-full me-2"></i>Feels Like <span>${weather.feelslike}</span>°C</h6>
                <h6 class="text-center fst-italic"><i class="fa-solid fa-wind me-2"></i>Humidity: <span>${weather.humidity}</span>g.m-3</h6>
                <h6 class="text-center fst-italic"><i class="fa-solid fa-eye me-2"></i>Visibility: <span>${weather.visibility}</span>Km</h6>
        



            </div>
        
        </div>
        
        
        `;
        let weatherDescription = weather.weather_descriptions[0].toLowerCase();
        changeBgwithWeather(weatherDescription);
        document.getElementById('weather-details').innerText='';
        document.getElementById('location').value='';
        document.getElementById('weather-details').appendChild(div);
    })
})

//change image with weather
function changeBgwithWeather(weatherDescription){
    if(weatherDescription.includes('cloud') || weatherDescription.includes('overcast')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2013/07/04/13/24/clouds-143152_960_720.jpg')";
    }
    
    else if (weatherDescription.includes('sand')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/06/03/17/33/desert-4249373_960_720.jpg')";
    }
    else if (weatherDescription.includes('rain') || weatherDescription.includes('drizzle')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/23/15/40/puddle-1853607_960_720.jpg')";
    }
    else if (weatherDescription.includes('snow')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412_960_720.jpg')";
    }
    else if (weatherDescription.includes('thunder')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_960_720.jpg')";
    }
    
    else if (weatherDescription.includes('clear')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/06/14/13/04/nature-3474826_960_720.jpg')";
    }
    else if (weatherDescription.includes('sun')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_960_720.jpg')";
    }
    
    else if (weatherDescription.includes('haze') || weatherDescription.includes('fog')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_960_720.jpg')";
    }
    else if (weatherDescription.includes('storm') || weatherDescription.includes('tornado') || weatherDescription.includes('hurricane')){
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/07/21/04/08/tower-5425011_960_720.jpg')";
    }

    else{
        
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/03/07/13/00/clouds-4040132_960_720.jpg')";
    }
}

//make 1st character upper case 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }