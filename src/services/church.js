import api from './api';
import { formatChurches } from '../utils/churches';

export const fetchChurches = async () => {
  const res = await api.get('/church/all');
  formatChurches(res.data.meta.content);
  return formatChurches(res.data.meta.content);
};
