import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Navigation from './Navigation';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CounterActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
