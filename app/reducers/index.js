import { combineReducers } from 'redux';
import counter from './counter';
import companies from './CompanyReducers';


const rootReducer = combineReducers({
  counter, companies
});

export default rootReducer;
