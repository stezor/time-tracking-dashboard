import "./ReportOwner.css";

export default function ReportOwner(props) {
  return (
    <div className="report-owner">
      <div className="report-owner__top">
        <span>
          <img src={props.avatarSrc} alt={props.avatarAlt} />
        </span>
        <p>Report for</p>
        <p>
          <span>Jeremy</span>
          <span>Robson</span>
        </p>
      </div>
      <div className="report-owner__bottom">
        <ul>
          <li>
            <div>
              <input
                type="radio"
                name="period"
                id="daily"
                value="daily"
                onChange={props.onPeriodChange}
                checked={props.period === "daily"}
              />
              <label htmlFor="daily">Daily</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="radio"
                name="period"
                id="weekly"
                value="weekly"
                onChange={props.onPeriodChange}
                checked={props.period === "weekly"}
              />
              <label htmlFor="weekly">Weekly</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="radio"
                name="period"
                id="monthly"
                value="monthly"
                onChange={props.onPeriodChange}
                checked={props.period === "monthly"}
              />
              <label htmlFor="monthly">Monthly</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
