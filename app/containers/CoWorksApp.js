import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Navigation from './Navigation';
import CoWorksActions from '../actions/index';

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CoWorksActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
