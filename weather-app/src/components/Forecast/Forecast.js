import {
      UilArrowUp,
      UilArrowDown,
      UilTemperature,
      UilTear,
      UilWind,
      Uilsun,
      UilSunset,

} from "@iconscout/react-unicons"
export default function Forecast({ title }) {
      return (
            <div className="col-md-12">
                  <p><strong>{title}</strong></p>
                  <div className="d-flex justify-content-around shadow-lg p-3 mb-5  rounded-2">
                        <div className="text-center">
                              <span>04:30 PM</span><br></br>
                              <UilSunset size={70} className="text-info" /><br></br>
                              <span>32 °C</span>
                        </div>
                        <div className="text-center">
                              <span>04:30 PM</span><br></br>
                              <UilSunset size={70} className="text-info" /><br></br>
                              <span>32 °C</span>
                        </div>
                        <div className="text-center">
                              <span>04:30 PM</span><br></br>
                              <UilSunset size={70} className="text-info" /><br></br>
                              <span>32 °C</span>
                        </div>
                        <div className="text-center">
                              <span>04:30 PM</span><br></br>
                              <UilSunset size={70} className="text-info" /><br></br>
                              <span>32 °C</span>
                        </div>
                        <div className="text-center">
                              <span>04:30 PM</span><br></br>
                              <UilSunset size={70} className="text-info" /><br></br>
                              <span>32 °C</span>
                        </div>
                  </div>

            </div>
      )
}