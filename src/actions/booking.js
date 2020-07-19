import { RECORD_SERVICE_BOOKING } from './actionTypes';
import { recordBooking } from '../services/booking';
import { fetchServices } from '../services/service';
import { getServices } from './service';
import { logError } from './error';

const handleBooking = (booking) => {
  return {
    type: RECORD_SERVICE_BOOKING,
    booking,
  };
};

export const handleNewBooking = (booking) => {
  return async (dispatch) => {
    try {
      const newBooking = await recordBooking(booking);
      const services = await fetchServices();
      
      if (newBooking.responseCode === '103') {
        return dispatch(logError(newBooking.responseDecription));
      } else {
        return dispatch(getServices(services));
      }
    } catch (error) {
      return dispatch(
        logError(
          error.response
            ? error.response.data.message
            : 'You have already booked this service'
        )
      );
    }
  };
};
