import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Text,
  Separator,
  ListItem,
  View,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import Constants from 'expo-constants';
import listBuilder from '../../lib/list-builder';
import { Actions } from 'react-native-router-flux';
import JobCell from '../Jobs/JobCell';

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
        icon: 'briefcase',
        title: 'Former work',
        onPress: () =>
          Actions.formerWork({
            filter: (item) => item.title === 'Faerch Plast',
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
        <Separator>
          <Text>Upcomming work</Text>
        </Separator>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          {JobCell(
            {
              id: 1,
              title: 'Faerch Plast',
              description: 'Arbejde med indpakning, transport osv.',
              price: 120,
              imageUri: 'https://www.faerch.com/Content/2270314.png?maxwidth=800',
              startTime: '2020-03-07T12:00:00',
              endTime: '2020-03-07T15:00:00',
              address: 'Nellikevej 10B, 8240 Risskov',
            },
            () => Actions.jobsSingle({ id: 1, title: 'Faerch Plast' }),
          )}
        </View>
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
