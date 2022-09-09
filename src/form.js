import React, { useState } from "react";
import axios from "axios";
import "./App.css";
export default function City() {
  let [temp, setTemp] = useState(null);

  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
  }

  let [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [des, setDes] = useState("");
  const [humid, setHumid] = useState("");
  const [wind, setWind] = useState("");
  const [mes, setmes] = useState("");
  const [date, setdate] = useState("");
  const [icon, seticon] = useState("");
  function show(event) {
    event.preventDefault();
    let apiKey = "dc6da26cba5d1a9368c9f7f2cd7d44f7";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    function showTemp(response) {
      console.log(response.data);
      setMessage(` ${Math.round(response.data.main.temp)}`);
      setDes(`${response.data.weather[0].description}`);
      setHumid(`Humidity:${response.data.main.humidity}`);
      setWind(`Wind:${response.data.wind.speed}km/h`);
      setmes(`${response.data.name}`);
      seticon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      let now = new Date();

      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let currentDay = days[now.getDay()];

      let currentHours = now.getHours();
      let currentMinutes = now.getMinutes();

      setdate(`${currentDay} ${currentHours}:  ${currentMinutes} `);
    }
  }

  function updatecity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let info = [message, des, humid, wind];
  console.log(info);
  if (info.length > 0) {
    return (
      <div>
        <form onSubmit={show} className="bord">
          <h1>Weather Search Engine</h1>
          <input
            placeholder="search"
            onChange={updatecity}
            type="text"
            className="inputt"
          ></input>
          <input type="submit" value="Search" className="buttonn"></input>
          <input type="submit" value="current" className="buttonn2"></input>
          <h4>
            {mes} <br />
            {date} <br /> {des}
          </h4>
          <span>
            <img src={icon} className="temp" />
            <h3 className="temp">
              {message} <span className="fo"></span>
            </h3>
            <h4 className="tempp">
              {humid}
              <br />
              {wind}
            </h4>
          </span>
        </form>
        <p>
          <a href="https://github.com/zahrarmz/weatherApp">Open-source code </a>
          , by Zahra Ramezani
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={show} className="bord">
          <h1>Weather Search Engine</h1>
          <input placeholder="search" onChange={updatecity} type="text"></input>
          <input type="submit" value="Search"></input>
        </form>
        <p>
          <a href="https://github.com/zahrarmz/weatherApp">Open-source code </a>
          , by Zahra Ramezani
        </p>
      </div>
    );
  }
}
