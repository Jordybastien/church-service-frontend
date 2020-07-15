import api from './api';

export const recordBooking = async () => {
  const res = await api.post('/booking/create');
  return res.data;
};
