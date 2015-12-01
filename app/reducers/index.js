import { combineReducers } from 'redux';
import counter from './counter';
import currentUser from './CurrentUserReducer';
import companies from './CompaniesReducer';
import signIn from './SignInReducer';

const rootReducer = combineReducers({
  counter, currentUser, companies, signIn
});

export default rootReducer;
