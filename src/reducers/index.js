import { combineReducers } from 'redux';
import auth from './auth';
import prosConsList from './prosConsList';


export default combineReducers({
  auth,
  prosConsList,
});
