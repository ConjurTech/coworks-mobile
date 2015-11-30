import CoWorksActions from '../actions/index';
import { bindActionCreators } from 'redux';

// Maps all actions
exports.mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(CoWorksActions, dispatch) };
}
