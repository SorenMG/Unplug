import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Separator, Right, Item, H3 } from 'native-base';
import { Loading, Error } from '../UI';
import { errorMessages } from '../../constants/messages';
import listBuilder from '../../lib/list-builder';

const SettingsStructure = [
  {
    title: 'Balance',
    elements: [
      {
        type: 'arrow',
        title: 'Withdraw',
        onPress: () => console.log('Saldo'),
      },
    ],
  },
  {
    title: 'Credit card',
    elements: [
      {
        type: 'arrow',
        title: '4571 4733 2066 3628',
        onPress: () => console.log('Credit Card'),
      },
      {
        type: 'arrow',
        title: 'add card',
        icon: 'plus',
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
        <Item style={{ borderBottomWidth: 0, margin: 16 }}>
          <Right>
            <H3 style={{ color: 'green' }}>500 kr</H3>
          </Right>
        </Item>
        {listBuilder(SettingsStructure)}
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
