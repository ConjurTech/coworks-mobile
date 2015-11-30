import { combineReducers } from 'redux';
import counter from './counter';
import companies from './CompaniesReducers';
import signIn from './SignInReducers';

const rootReducer = combineReducers({
  counter, companies, signIn
});

export default rootReducer;
