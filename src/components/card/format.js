import { format, parseISO, add } from 'date-fns';

export const duration = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return `${hours}ч ${minutes}м`;
};

export const timeOfDeparture = (date, durationTime) => {
  const departure = parseISO(date);
  const arrival = add(departure, { minutes: durationTime });
  return `${format(departure, 'dd.MM hh:mm')} - ${format(arrival, 'dd.MM hh:mm')}`;
};

export const declination = (stopsQuantity) => {
  if (stopsQuantity === 0 || (stopsQuantity > 4 && stopsQuantity < 21)) {
    return `${stopsQuantity} пересадок`;
  }
  if (stopsQuantity === 1) {
    return `${stopsQuantity} пересадка`;
  }
  if (stopsQuantity > 1 && stopsQuantity < 5) {
    return `${stopsQuantity} пересадки`;
  }
  return null;
};
