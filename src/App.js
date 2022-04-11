import './App.css';
import WeatherTable from './WeatherTable'
import Weather from './Weather'

function App() {

  return (
    <div className="App">
      <h2>Weather App</h2>
      <Weather>
        <WeatherTable/>
      </Weather>
    </div>
  );
}

export default App;
