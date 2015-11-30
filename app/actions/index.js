import counter from './counter';
import CompaniesActions from './CompaniesActions';
import SignInActions from './SignInActions';

let actions = {};
Object.assign(actions, counter, CompaniesActions, SignInActions);

module.exports = actions;
