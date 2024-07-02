import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/ls-95" target="_blank" rel="noreferrer">
            Laetitia Saunders
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ls-95/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
