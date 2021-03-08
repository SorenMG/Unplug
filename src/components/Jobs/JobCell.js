import React from 'react';
import { ListItem, Thumbnail, Body, Right, Text, Left } from 'native-base';

const JobCell = ({ item, onPress }) => (
  <ListItem thumbnail onPress={onPress}>
    <Left>
      <Thumbnail square source={{ uri: item.imageUri }} style={{ borderRadius: 10 }} />
    </Left>
    <Body>
      <Text>{item.title}</Text>
      <Text note>{item.description}</Text>
    </Body>
    <Right>
      <Text note>{item.price}</Text>

      <Text note>pr. time</Text>
    </Right>
  </ListItem>
);

export default JobCell;
