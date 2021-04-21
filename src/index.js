import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import * as Facebook from 'expo-facebook';
import { connect } from 'react-redux';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import { Main, Auth } from './routes/index';
import Loading from './components/UI/Loading';
import { StatusBar } from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    Facebook.initializeAsync();

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store, persistor, token } = this.props;

    if (loading) return <Loading />;

    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <StatusBar barStyle={'dark-content'} />
            <StyleProvider style={getTheme(theme)}>
              <Router>
                <Stack key="root">{token !== null ? Main : Auth}</Stack>
              </Router>
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
