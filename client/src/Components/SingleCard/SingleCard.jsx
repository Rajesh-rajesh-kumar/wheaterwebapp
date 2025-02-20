import React from 'react';
import dayjs from "dayjs";


const SingleCard = ({item, className, onClick})=>{

    const weekdayIndex = dayjs.unix(item.dt).day();
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    return (
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                <img className="day-icon"  alt="img"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        />
                <span className="day-name">{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
                <span className="day-temp">{Math.round(item.temp.max)}°C</span>
            </li>
        </>
    )
}

export default SingleCard;