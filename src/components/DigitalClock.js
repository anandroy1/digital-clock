import React, { useState, useEffect } from "react";
import moment from "moment";

const DigitalClock = () => {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="clock">
                <h1>Digital Clock</h1>
                <div className="time">
                    {time.format("HH:mm:ss A")}
                </div>
                <div className="day">
                    {time.format("dddd")}
                </div>
                <div className="date">
                    {time.format("Do MMMM, YYYY")}
                </div>
            </div>
        </>
    )

}
export default DigitalClock;