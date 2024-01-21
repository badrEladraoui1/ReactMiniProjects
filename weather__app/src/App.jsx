import { useEffect, useState } from "react";
import SearchForm from "./components/SearchFrom";
import CityInfo from "./components/CityInfo";
import "./App.css";

const API_ID = "1662c94985342fc5ac57e5060e3fd424";
const BASE_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_ID}&q=`;

function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCity = (value) => {
    setCity(value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${city}`);
        if (!response.ok) {
          console.log(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCurrentWeather(data.list[0].weather[0].main);
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  console.log(currentWeather);

  if (error) return <h1>Something went wrong</h1>;

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      <SearchForm onGetCity={getCity} />
      <CityInfo currentWeather={currentWeather} />
    </div>
  );
}

export default App;
