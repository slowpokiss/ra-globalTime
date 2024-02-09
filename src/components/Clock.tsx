import { useEffect, useState } from "react";
import "./Clock.css";

interface props {
  onClick: (index: number) => void;
  timeZone: number;
  name: string;
  ind: number;
}

function Clock({ timeZone, name, ind, onClick }: props) {
  const initialState = getZoneTime(timeZone);
  const [state, setState] = useState(initialState);

  function getZoneTime(grinvichDiff: number) {
    const data = new Date();
    const currUtcData = data.getTime() + data.getTimezoneOffset() * 60000;
    const needUtcTime = currUtcData + grinvichDiff * 3600 * 1000;
    const needUtcData = new Date(needUtcTime);
    return needUtcData.toLocaleTimeString();
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const result = getZoneTime(timeZone);
      setState(result);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [timeZone]);

  return (
    <div className="clock-area" key={ind}>
      <div className="clock-name">{name}</div>
      <div className="clock">
        {state}
        <div className="clock-delete" onClick={() => onClick(ind)} key={ind}>
          &#10006;
        </div>
      </div>
    </div>
  );
}

export default Clock;
