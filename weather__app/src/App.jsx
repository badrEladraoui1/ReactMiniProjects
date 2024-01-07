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
        const data = await response.json();
        console.log(data);
        setCurrentWeather(data.list[0].weather[0].main);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  console.log(currentWeather);

  return (
    <div>
      <SearchForm onGetCity={getCity} />
      <CityInfo currentWeather={currentWeather} />
    </div>
  );
}

export default App;
