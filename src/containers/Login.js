import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/Login';

class LoginContainer extends Component {
  constructor(props) {
    super();
    this.state = { error: null };
  }

  authenticate = async () => {
    try {
      const { fetchData } = this.props;

      fetchData();
    } catch (err) {
      this.setState({ error: err });
    }
  };

  /**
   * Render
   */
  render = () => {
    const { error } = this.state;
    return <Layout error={error} onPressLogin={this.authenticate} />;
  };
}

LoginContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

LoginContainer.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.auth.authenticate,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
