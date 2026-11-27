import React, { Component } from "react";
import "./compassClock.css";

const MONTH_SHORT_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getSnapshotState() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    dayOfWeek: now.getDay(),
    dayOfMonth: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}

class CompassClock extends Component {
  constructor(props) {
    super(props);
    this.state = getSnapshotState();
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(getSnapshotState());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  renderRing(items, activeIndex, radiusPx, getLabel) {
    const count = items.length;
    const stepAngle = 360 / count;
    const ringRotation = -(activeIndex * stepAngle);

    return (
      <div
        className="compass-ring"
        style={{ transform: `rotate(${ringRotation}deg)` }}
      >
        {items.map((item, index) => {
          const angle = index * stepAngle;
          const isActive = index === activeIndex;
          return (
            <div
              key={`${radiusPx}-${index}`}
              className={`compass-item ${isActive ? "is-active" : ""}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radiusPx}px) rotate(${-angle}deg)`,
              }}
            >
              {getLabel(item, index)}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { year, month, dayOfWeek, dayOfMonth, hour, minute, second } =
      this.state;

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const weekdays = Array.from({ length: 7 }, (_, i) => i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    const seconds = Array.from({ length: 60 }, (_, i) => i);

    const weekNumber = Math.ceil(dayOfMonth / 7);

    return (
      <section className="compass-clock">
        <div className="compass-year">
          {year} <span>/ Year</span>
        </div>

        <div className="compass-stage">
          {this.renderRing(months, month, 36, (m) => `${m} month`)}
          {this.renderRing(weekdays, dayOfWeek, 66, (d) => WEEKDAY_NAMES[d])}
          {this.renderRing(days, dayOfMonth - 1, 98, (d) => `${d} day`)}
          {this.renderRing(hours, hour, 128, (h) => `${h} hr`)}
          {this.renderRing(minutes, minute, 158, (min) => `${min} min`)}
          {this.renderRing(seconds, second, 188, (sec) => `${sec} sec`)}

          <div className="compass-linear-readout">
            <span>{month + 1} month</span>
            <span>week {weekNumber}</span>
            <span>{dayOfMonth} day</span>
            <span>{hour} hr</span>
            <span>{minute} min</span>
            <span>{second} sec</span>
          </div>
        </div>

        <div className="compass-month-corner">{MONTH_SHORT_NAMES[month]}</div>
      </section>
    );
  }
}

export default CompassClock;