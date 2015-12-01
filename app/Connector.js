import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import CoWorksActions from './actions/index';

exports.connect = connect;

// Just map all actions for the default method
exports.mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(CoWorksActions, dispatch) };
}
