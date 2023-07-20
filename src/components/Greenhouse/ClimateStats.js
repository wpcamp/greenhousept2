import './ClimateStats.css';
import { ClimateContext } from '../../context/ClimateContext';
import { useContext, useEffect, useState } from 'react';


function ClimateStats() {
  const {temperature, setTemperature, humidity, setHumidity} = useContext(ClimateContext)
  const [thermostat, setThermostat] = useState(temperature)

  useEffect({
    
  }, [temperature])

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {thermostat}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;