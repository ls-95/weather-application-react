import React, { useState } from "react";

export default function WeatherTemperature(props) {
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
    return (
      <div className="temperature-container">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          °C | °
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
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
}
