const API_KEY = "8f41957981a3dd856fcb09b550d974da";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8f41957981a3dd856fcb09b550d974da
const getWeatherData = (infoType, searchParams) => {
      const url = new URL(BASE_URL + '/' + infoType)
      url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }
      )
      console.log(url)
      return fetch(url).then((res) => res.json()).then((data) => data);
};

export default getWeatherData;