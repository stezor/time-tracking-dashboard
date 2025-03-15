import { useEffect, useState } from "react";
import "./App.css";
import UserPhoto from "./assets/images/image-jeremy.png";
import EllipsisSvg from "./assets/images/icon-ellipsis.svg";

const PERIODS = ["daily", "weekly", "monthly"];

function App() {
  const [period, setPeriod] = useState("weekly");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Oops! Something went wrong.");
        }
      })
      .then((data) => {
        setActivities(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const periodsOutput = PERIODS.map((item) => (
    <li key={item} className="periods__item">
      <input
        type="radio"
        name="period"
        id={item}
        value={item}
        onChange={handlePeriod}
        checked={item === period}
      />
      <label htmlFor={item}>{item}</label>
    </li>
  ));

  const activitiesOutput = activities.map((item) => {
    const text = item.title.toLowerCase().replace(" ", "-");
    return (
      <li key={text} className={`dashboard__item dashboard__item--${text}`}>
        <div>
          <p>{item.title}</p>
          <p>{item.timeframes[period].current}hrs</p>
          <button type="button">
            <img
              src={EllipsisSvg}
              alt="Small svg illustration of three dots."
            />
          </button>
          <p>Last week - {item.timeframes[period].previous}hrs</p>
        </div>
      </li>
    );
  });

  return (
    <main>
      <section id="time-tracking-dashboard">
        <ul className="dashboard__list">
          <li className="dashboard__item dashboard__item--user">
            <div>
              <span>
                <img src={UserPhoto} alt="An image of the user" />
              </span>
              <p>Report for</p>
              <p>
                <span>Jeremy</span>
                <span>Robson</span>
              </p>
            </div>
            <ul className="periods__list">{periodsOutput}</ul>
          </li>
          {activitiesOutput}
        </ul>
      </section>
    </main>
  );
}

export default App;

// Report for
// Jeremy Robson

// Daily
// Weekly
// Monthly

// Work
// 5hrs <!-- daily -->
// Previous - 7hrs <!-- daily -->
// 32hrs <!-- weekly -->
// Previous - 36hrs <!-- weekly -->
// 103hrs <!-- monthly -->
// Previous - 128hrs <!-- monthly -->

// Play
// 1hr <!-- daily -->
// Previous - 2hrs <!-- daily -->
// 10hrs <!-- weekly -->
// Previous - 8hrs <!-- weekly -->
// 23hrs <!-- monthly -->
// Previous - 29hrs <!-- monthly -->

// Study
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 7hrs <!-- weekly -->
// 13hrs <!-- monthly -->
// Previous - 19hrs <!-- monthly -->

// Exercise
// 1hr <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 5hrs <!-- weekly -->
// 11hrs <!-- monthly -->
// Previous - 18hrs <!-- monthly -->

// Social
// 1hr <!-- daily -->
// Previous - 3hrs <!-- daily -->
// 5hrs <!-- weekly -->
// Previous - 10hrs <!-- weekly -->
// 21hrs <!-- monthly -->
// Previous - 23hrs <!-- monthly -->

// Self Care
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 2hrs <!-- weekly -->
// Previous - 2hrs <!-- weekly -->
// 7hrs <!-- monthly -->
// Previous - 11hrs <!-- monthly -->
