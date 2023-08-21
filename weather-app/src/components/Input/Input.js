import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons"
export default function Input({ }) {
      return (
            <div className="col-md-12 my-2">
                  <div className="input-group rounded">
                        <input
                              type="search"
                              className="form-control rounded"
                              placeholder="Search"
                              aria-label="Search"
                              aria-describedby="search-addon"
                        />
                        <span className="input-group-text border-0 btn btn-secondary" id="search-addon">
                              <UilSearch />
                        </span>
                        <span className="input-group-text border-0 btn btn-secondary" id="">
                              <UilLocationPoint />
                        </span>
                        <span className="text-white d-block d-flex gap-1 align-items-center">
                              <span className="btn text-white">°C</span>
                              |
                              <span className="btn text-white">°F</span>
                        </span>
                  </div>

            </div>
      )
}     