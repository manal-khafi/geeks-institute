import React, { Component } from 'react';
import './reactClock.css';

const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1} month`);
const WEEKS = Array.from({ length: 7 }, (_, i) => `week ${i + 1}`);
const DAYS = Array.from({ length: 31 }, (_, i) => `${i + 1} day`);
const HOURS = Array.from({ length: 24 }, (_, i) => `${i + 1} hr`);
const MINUTES = Array.from({ length: 60 }, (_, i) => `${i + 1} min`);
const SECONDS = Array.from({ length: 60 }, (_, i) => `${i + 1} sec`);

class ReactClock extends Component {
  constructor(props) {
    super(props);
    this.state = this.getClockState();
  }

  getClockState() {
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

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(this.getClockState());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  renderRing(items, activeIndex, radius) {
    const step = 360 / items.length;
    const rotationAngle = -activeIndex * step;

    return (
      <div
        className="compass-ring"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        {items.map((label, index) => {
          const angle = index * step;
          const isCurrent = index === activeIndex;

          return (
            <span
              key={label}
              className={`compass-item ${isCurrent ? 'is-current' : ''}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`,
              }}
            >
              {label}
            </span>
          );
        })}
      </div>
    );
  }

  render() {
    const { year, month, dayOfWeek, dayOfMonth, hour, minute, second } =
      this.state;

    // Map 0-indexed JS Date values to 0-indexed ring arrays
    const monthIndex = month; // 0..11 -> "1 month".."12 month"
    const weekIndex = dayOfWeek; // 0..6 -> "week 1".."week 7"
    const dayIndex = dayOfMonth - 1; // 0..30 -> "1 day".."31 day"
    const hourIndex = hour === 0 ? 23 : hour - 1; // 0..23 -> "1 hr".."24 hr"
    const minuteIndex = minute === 0 ? 59 : minute - 1; // 0..59 -> "1 min".."60 min"
    const secondIndex = second === 0 ? 59 : second - 1; // 0..59 -> "1 sec".."60 sec"

    return (
      <div className="compass-scene">
        <div className="compass-board">
          <div className="top-left-year">
            <span className="year-number">{year}</span>
            <span className="year-label">/ Year</span>
          </div>

          <div className="compass-wheel">
            <div className="linear-readout-line" />
            {this.renderRing(MONTHS, monthIndex, 62)}
            {this.renderRing(WEEKS, weekIndex, 118)}
            {this.renderRing(DAYS, dayIndex, 174)}
            {this.renderRing(HOURS, hourIndex, 230)}
            {this.renderRing(MINUTES, minuteIndex, 286)}
            {this.renderRing(SECONDS, secondIndex, 342)}
          </div>

          <div className="bottom-right-month">{SHORT_MONTHS[month]}</div>
        </div>
      </div>
    );
  }
}

export default ReactClock;