import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Separator, ListItem, View } from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import Constants from 'expo-constants';
import listBuilder from '../../lib/list-builder';
import { Actions } from 'react-native-router-flux';

const SettingsStructure = [
  {
    title: 'Balance',
    elements: [
      {
        type: 'text',
        title: 'Saldo',
        icon: 'wallet',
        description: '500 kr.',
        onPress: () => Actions.balancePage(),
      },
      {
        type: 'arrow',
        icon: 'suitcase',
        title: 'Former work',
        onPress: () =>
          Actions.formerWork({
            customListData: [
              {
                id: 0,
                title: 'Arla',
                description: 'Arbejde med ostindpakning',
                price: 150,
                imageUri:
                  'https://pbs.twimg.com/profile_images/466877827720024066/1_wqAEZU_400x400.png',
              },
            ],
          }),
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
        <Separator />
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <ListItem
            last
            style={{ justifyContent: 'center' }}
            onPress={() => console.log('Sign out')}
          >
            <Text style={{ color: 'red' }}>Sign out</Text>
          </ListItem>
        </View>
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
