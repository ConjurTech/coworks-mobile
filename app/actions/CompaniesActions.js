import Request from '../Request';
import { urls } from '../config/environment';

export const GET_COMPANIES = 'GET_COMPANIES'
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

export default { getAllCompanies };
