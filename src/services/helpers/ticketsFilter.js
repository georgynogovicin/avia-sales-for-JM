const ticketsFilter = (filtersValue, ticket) => {
  const filters = filtersValue.reduce((acc, item) => {
    if (item.status) acc.push(item.filterValue);
    return acc;
  }, []);

  const stops = ticket.segments[0].stops.length;

  if (filters.some((item) => item === null)) return true;

  return filters.some((item) => item === stops);
};

export default ticketsFilter;
