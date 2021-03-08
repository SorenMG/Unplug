import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Text,
  ListItem,
  Header,
  Separator,
  Left,
  Body,
  Button,
  Icon,
  Right,
  Switch,
  View,
} from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import { Settings } from 'react-native';
import Constants from 'expo-constants';

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
      {
        type: 'arrow',
        title: 'Website',
        onPress: () => console.log('Website'),
      },
    ],
  },
];

const ListBuilder = (structure) => {
  const typeSwitch = (statement, description) => {
    switch (statement) {
      case 'text':
        return (
          <>
            <Text>{description}</Text>
            <Icon active name="arrow-forward" />
          </>
        );
      case 'switch':
        return <Switch />;
      case 'arrow':
        return <Icon active name="arrow-forward" />;
    }
  };

  return structure.map((section, i) => {
    return (
      <View style={{ backgroundColor: '#FFFFFF' }}>
        <Separator>
          <Text>{section.title}</Text>
        </Separator>
        {section.elements.map((data, i) => (
          <ListItem
            key={i}
            last={i + 1 == section.elements.length}
            icon={data.icon != null}
            onPress={data.onPress}
          >
            <Left>
              {data.icon != null && (
                <Button style={{ backgroundColor: '#000000' }}>
                  <Icon active name={data.icon} />
                </Button>
              )}
              {data.icon == null && <Text>{data.title}</Text>}
            </Left>
            <Body>{data.icon != null && <Text>{data.title}</Text>}</Body>
            <Right>{typeSwitch(data.type, data.description)}</Right>
          </ListItem>
        ))}
      </View>
    );
  });
};

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
        {ListBuilder(SettingsStructure)}
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
