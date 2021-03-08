import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Separator } from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import Constants from 'expo-constants';
import listBuilder from '../../lib/list-builder';

const SettingsStructure = [
  {
    title: 'Balance',
    elements: [
      {
        type: 'text',
        title: 'Saldo',
        icon: 'wallet',
        description: '500 kr.',
        onPress: () => console.log('Saldo'),
      },
      {
        type: 'arrow',
        icon: 'suitcase',
        title: 'Tidligere arbejde',
        onPress: () => console.log('Work'),
      },
    ],
  },
  {
    title: 'Contact',
    elements: [
      {
        type: 'arrow',
        title: 'Terms of service',
        onPress: () => console.log('Terms'),
      },
    ],
  },
];

const MainUser = ({ error, loading }) => {
  if (error) {
    return <Error content={error} />;
  }

  if (loading) {
    return <Loading content={loading} />;
  }

  return (
    <Container>
      <Content style={{ backgroundColor: '#F0EFF5' }}>
        {listBuilder(SettingsStructure)}
        <Separator>
          <Text>Version: {Constants.manifest.version}</Text>
        </Separator>
      </Content>
    </Container>
  );
};

MainUser.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
};

MainUser.defaultProps = {
  error: null,
  loading: false,
};

export default MainUser;
