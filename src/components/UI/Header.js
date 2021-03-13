import React from 'react';
import { Header, Left, H1 } from 'native-base';

const CustomHeader = ({ title }) => (
  <Header style={{ backgroundColor: 'white', marginHorizontal: 16 }}>
    <Left style={{ marginLeft: -8 }}>
      <H1 style={{ fontWeight: 'bold' }}>{title}</H1>
    </Left>
  </Header>
);

export default CustomHeader;
