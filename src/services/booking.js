import api from './api';

export const recordBooking = async (booking) => {
  const res = await api.post('/booking/create', booking);
  return res.data;
};
