import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import services from './services';
import loading from './loading';
import error from './error';

export default combineReducers({
  form: formReducer,
  services,
  loading,
  error,
});
