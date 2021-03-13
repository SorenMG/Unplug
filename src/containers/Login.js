import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/Login';
import * as Facebook from 'expo-facebook';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  onPressLogin = async () => {
    // Authenticate
    Facebook.logInWithReadPermissionsAsync()
      .then(({ token, type }) => {
        if (type === 'cancel') throw new Error();
        AsyncStorage.setItem('@Auth:token', token);
      }, null)
      .then(() => Actions.main())
      .catch((err) => this.setState({ error: err.message }));
  };

  /**
   * Render
   */
  render = () => {
    const { error } = this.state;
    return <Layout error={error} onPressLogin={this.onPressLogin} />;
  };
}

LoginContainer.propTypes = {};

LoginContainer.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
