import api from './api';

export const recordBooking = async (booking) => {
  const res = await api.post('/booking/create', booking);
  console.log('=====>res', res.data)
  return res.data;
};
