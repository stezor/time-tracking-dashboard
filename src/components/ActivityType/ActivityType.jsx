import "./ActivityType.css";

export default function ActivityType(props) {
  const classes = `activity-type activity-type--${props.data.title
    .toLowerCase()
    .replace(" ", "-")} ${props.className || ""}`.trim();

  return (
    <div className={classes}>
      <div>
        <p>{props.data.title || "Activity"}</p>
        <p>{props.data.timeframes[props.data.period].current}hrs</p>
        <div>
          <button type="button">
            <span>
              <img src={props.btnSrc} alt={props.btnAlt} />
            </span>
          </button>
        </div>
        <p>
          Last week - {props.data.timeframes[props.data.period].previous}hrs
        </p>
      </div>
    </div>
  );
}
