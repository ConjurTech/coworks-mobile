import counter from './counter';
import CompanyActions from './CompanyActions';

let actions = {};
Object.assign(actions, counter, CompanyActions);

module.exports = actions;
