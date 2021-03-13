import React from 'react';
import { ListItem, Thumbnail, Body, Text, Left, Button } from 'native-base';
import { View } from 'react-native';

const FriendCell = (item, onPress) => (
  <ListItem thumbnail noBorder onPress={onPress} style={{ height: 85 }}>
    <Left>
      <Thumbnail square source={{ uri: item.picture }} style={{ borderRadius: 100 }} />
    </Left>
    <Body>
      <Text style={{ fontWeight: '500' }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', paddingTop: 2, paddingRight: 16 }}>
        <Button style={{ flex: 1, marginRight: 8, justifyContent: 'center', height: 40 }}>
          <Text style={{ fontWeight: 'bold' }}>Accept request</Text>
        </Button>
        <Button style={{ flex: 1, justifyContent: 'center', height: 40 }}>
          <Text style={{ fontWeight: 'bold' }}>Remove</Text>
        </Button>
      </View>
    </Body>
  </ListItem>
);

export default FriendCell;
