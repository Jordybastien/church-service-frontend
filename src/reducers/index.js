import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import services from './services';
import loading from './loading';
import error from './error';
import churches from './church';
import authedUser from './authedUser';
import link from './callBackLink';

export default combineReducers({
  form: formReducer,
  services,
  loading,
  error,
  churches,
  authedUser,
  link,
});
