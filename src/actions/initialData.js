import { getServices } from './service';
import { fetchServices } from '../services/service';
import { showLoading, hideLoading } from './loading';

const getInitialData = async () => {
  const services = await fetchServices();

  return services;
};

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then((services) => {
        dispatch(getServices(services));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
