import { FETCH_CHURCHES } from './actionTypes';

export const getChurches = (churches) => {
  return {
    type: FETCH_CHURCHES,
    churches,
  };
};
