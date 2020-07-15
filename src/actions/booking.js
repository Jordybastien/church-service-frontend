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
      await recordBooking(booking);
      const services = await fetchServices();

      dispatch(getServices(services));
      return true;
    } catch (error) {
      return dispatch(
        logError(
          error.response
            ? error.response.data.message
            : 'Failed to book service, Please contact Us'
        )
      );
    }
  };
};
