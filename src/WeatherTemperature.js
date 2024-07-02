import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="temperature-container">
      <span className="temperature">{props.celcius}</span>
      <span className="unit">°C</span>
    </div>
  );
  /*
  CURRENT TEMPERATURE CONVERSION CODE TO FAHRENHEIT:

  { useState } removed

  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    
    RETURN CODE HERE WITH THIS CODE INSIDE THE SPAN AFTER CELSIUS:
    | °
        <a href="/" onClick={showFahrenheit}>
          F
        </a>
  } else {
    return (
      <div className="temperature-container">
        <span className="temperature">{fahrenheit()}</span>
        <span className="unit">
          °
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
  */
}
