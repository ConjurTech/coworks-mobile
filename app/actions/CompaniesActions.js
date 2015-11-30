import { GET_COMPANIES } from '../constants/ActionTypes';
import Request from '../services/Request';
import { urls } from '../configs/environment';

getAllCompanies = () => {
  return dispatch => Request.get(urls.GET_COMPANIES)
  .then(({results}) => {
    dispatch({
      type: GET_COMPANIES,
      companies: results.companies
    })
  })
  .catch(err => {

  })
  .done();
}

module.exports = { getAllCompanies };
