import { RECORD_SERVICE_BOOKING } from './actionTypes';
import { recordBooking } from '../services/booking';

const recordBooking = (booking) => {
  return {
    type: RECORD_SERVICE_BOOKING,
    booking,
  };
};

export const handleNewBooking = (booking) => {};
