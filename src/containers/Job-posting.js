import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/JobPosting';

class JobPostingContainer extends Component {
  /**
   * Render
   */
  render = () => {
    return <Layout />;
  };
}

JobPostingContainer.propTypes = {
};

JobPostingContainer.defaultProps = {
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingContainer);
