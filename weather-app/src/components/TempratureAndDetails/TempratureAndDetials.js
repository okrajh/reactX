import {
      UilArrowUp,
      UilArrowDown,
      UilTemperature,
      UilTear,
      UilWind,
      Uilsun,
      UilSunset,

} from "@iconscout/react-unicons";
export default function TempratureAndDetials({ }) {
      return (
            <div className="col-md-12 text-center mb-5">
                  <p className="text-white h4 text-bold shadow-lg p-4"><strong>Cloudy or whatever</strong></p>
                  <div className="row justify-content-center align-item-center shadow-lg rounded-3">
                        <div className="col-md-3 my-auto">
                              <UilSunset size={70} className="text-warning" />
                        </div>
                        <div className="col-md-3 my-auto">
                              <h1>34 °C</h1>
                        </div>
                        <div className="col-md-3">
                              <div className="row text-start py-4">
                                    <div className="col-md-12">
                                          <UilTemperature size={18} className="text-warning me-1" />
                                          <strong>Real Fell - </strong>
                                          <span>32 °C</span>
                                    </div>
                                    <div className="col-md-12">
                                          <UilTear size={18} className="text-warning me-1" />
                                          <strong>Humadity - </strong>
                                          <span>32 °C</span>
                                    </div>
                                    <div className="col-md-12">
                                          <UilWind size={18} className="text-warning me-1" />
                                          <strong>Wind Speed - </strong>
                                          <span>32 °C</span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="row justify-content-center mt-5 shadow-lg rounded-2 align-items-center">
                        <div className="col-md-3">
                              <UilSunset />
                              <p><strong>RISE - </strong>6:45 AM</p>
                        </div>
                        <div className="col-md-3">
                              <UilSunset />
                              <p><strong>SET - </strong>6:45 AM</p>
                        </div>
                        <div className="col-md-3">
                              <UilArrowDown />
                              <p><strong>LOW - </strong>6:45 AM</p>
                        </div>
                        <div className="col-md-3">
                              <UilArrowUp />
                              <p><strong>HIGH - </strong>6:45 AM</p>
                        </div>
                  </div>
            </div>
      )
}