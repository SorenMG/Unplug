import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Friend-requests/List';

class FriendRequestsContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      error: null,
      loading: false,
    };
  }

  componentDidMount = () => this.fetchData();

  fetchData = async () => {
    const { fetchData } = this.props;

    this.setState({ loading: true, error: null });

    try {
      await fetchData();
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  };

  /**
   * Render
   */
  render = () => {
    const { listData } = this.props;
    const { loading, error } = this.state;

    return <Layout listData={listData} loading={loading} error={error} />;
  };
}

FriendRequestsContainer.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchData: PropTypes.func.isRequired,
};

FriendRequestsContainer.defaultProps = {};

const mapStateToProps = (state) => ({
  listData: state.requests.listData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.requests.fetchRequests,
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsContainer);
