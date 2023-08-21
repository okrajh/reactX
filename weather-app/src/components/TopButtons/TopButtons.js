export default function TopButton({ }) {
      const cities = [
            { id: 1, name: "New York" },
            { id: 2, name: "Los" },
            { id: 3, name: "Chicago" },
            { id: 4, name: "Houston" },
            { id: 5, name: "Miami" },
            { id: 6, name: "San" },
            { id: 7, name: "Seattle" },
      ]
      return (
            <div className="col-md-12 d-flex justify-content-center mt-2">
                  {cities.map(city => (
                        <button key={city.id} className="btn btn-secondary text-white">{city.name}</button>
                  ))}
            </div>
      )
}