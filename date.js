const makePgDate = (date, timeZone) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = '00';

  const datePart = `${year}-${month}-${day}`;
  const timePart = `${hour}:${minute}:${second}`;

  return `${datePart} ${timePart} ${timeZone}`;
}

const overlaps = (range, ranges) => {
  const { startTime, endTime } = range;
  return ranges.some(r => 
    (!endTime || r.startTime.getTime() <= endTime.getTime()) &&
    (!r.endTime || r.endTime.getTime() >= startTime.getTime()));
}

const getTimeString = (date) => {
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
}

const addDays = (date, days) => {
  const updatedDate = new Date(date);
  updatedDate.setDate(updatedDate.getDate() + days);
  return updatedDate;
}

const addMonths = (date, months) => {
  const updatedDate = new Date(date);
  updatedDate.setMonth(updatedDate.getMonth() + months);
  return updatedDate;
}

const addYears = (date, years) => {
  const updatedDate = new Date(date);
  updatedDate.setFullYear(updatedDate.getFullYear() + years);
  return updatedDate;
}

const makeAreaDate = (date, timeZone, addDays) => {
  if (!date) {
    return null;
  }
  const updatedDate = new Date(date);
  updatedDate.setHours(0, 0, 0, 0);
  if (addDays) {
    updatedDate.setDate(updatedDate.getDate() + addDays);
  }
  return makePgDate(updatedDate, timeZone);
}

export {
  makePgDate,
  overlaps,
  getTimeString,
  isWeekend,
  addDays,
  addMonths,
  addYears,
  makeAreaDate 
};
