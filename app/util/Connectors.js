import CoWorksActions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

exports.connect = connect;

// Maps all actions
exports.mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(CoWorksActions, dispatch) };
}
