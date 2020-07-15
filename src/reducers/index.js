import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import services from './services';
import loading from './loading';

export default combineReducers({
  form: formReducer,
  services,
  loading,
});
