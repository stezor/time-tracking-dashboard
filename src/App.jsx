import { useEffect, useState } from "react";
import ReportOwner from "./components/ReportOwner/ReportOwner";
import ActivityType from "./components/ActivityType/ActivityType";
import OwnerPhoto from "./assets/images/image-jeremy.png";
import EllipsisIcon from "./assets/images/icon-ellipsis.svg";

function App() {
  const [activities, setActivities] = useState([]);
  const [period, setPeriod] = useState("weekly");

  useEffect(() => {
    fetch("/data.json")
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
        console.log("[Error]: ", err);
      });
  }, []);

  const handlePeriod = (e) => {
    const val = e.target.value;
    setPeriod(val);
  };

  const activitiesOutput = activities.map((item) => (
    <ActivityType
      key={item.title}
      btnSrc={EllipsisIcon}
      btnAlt="Svg ellipsis icon for a button"
      data={{ period, ...item }}
    />
  ));

  return (
    <main>
      <section>
        <ReportOwner
          avatarSrc={OwnerPhoto}
          alt="Photo of the owner of the time tracking report"
          period={period}
          onPeriodChange={handlePeriod}
        />
        {activitiesOutput}
      </section>
    </main>
  );
}

export default App;
