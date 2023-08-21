import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButtons/TopButtons';
import Input from './components/Input/Input';
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'
import TempratureAndDetials from './components/TempratureAndDetails/TempratureAndDetials'
import Forecast from './components/Forecast/Forecast'
import getWeatherData from './services/WeatherService';
function App() {
  const fetchData = async () => {
    const data = await getWeatherData('weather', { q: 'london' })
    console.log(data)
  }
  fetchData()
  return (
    <div className='mx-auto w-50 row bg-secondary justify-content-center shadow-lg rounded-2 mt-2'>
      <TopButton />
      <Input />
      <TimeAndLocation />
      <TempratureAndDetials />
      <Forecast title={"HOURLY FORECAST"} />
      <Forecast title={"DAILY FORECAST"} />
    </div>
  );
}

export default App;
