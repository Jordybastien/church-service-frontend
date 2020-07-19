import { showLoading, hideLoading } from './loading';
import { getChurches } from './church';
import { fetchChurches } from '../services/church';

const getInitialData = async () => {
  const churches = await fetchChurches();

  return churches;
};

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then((churches) => {
        dispatch(getChurches(churches));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};
