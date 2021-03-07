import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Jobs/JobPosting';

class JobPostingContainer extends Component {
  /**
   * Render
   */
  render = () => {
    const { listData } = this.props;
    return <Layout listData={listData} />;
  };
}

JobPostingContainer.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

JobPostingContainer.defaultProps = {};

const mapStateToProps = (state) => ({
  listData: state.jobs.listData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingContainer);
