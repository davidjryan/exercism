//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 24 * 60;

const calculateTotalMinutes = (totalMinutes) => {
  const sumMinutes =
    (MINUTES_IN_DAY + (totalMinutes % MINUTES_IN_DAY)) % MINUTES_IN_DAY;
  return sumMinutes;
};

export class Clock {
  constructor(hours, minutes = 0) {
    this._minutes = calculateTotalMinutes(hours * MINUTES_IN_HOUR + minutes);
  }

  get minutes() {
    return this._minutes % MINUTES_IN_HOUR;
  }

  get hours() {
    return Math.floor(this._minutes / MINUTES_IN_HOUR);
  }

  toString() {
    return [this.hours, this.minutes]
      .map((time) => `${time}`.padStart(2, '0'))
      .join(':');
  }

  plus(minutes) {
    return new Clock(0, this._minutes + minutes);
  }

  minus(minutes) {
    return new Clock(0, this._minutes - minutes);
  }

  equals(newClock) {
    return this._minutes === newClock._minutes;
  }
}
