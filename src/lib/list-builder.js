import React from 'react';
import { Icon, Text, ListItem, Separator, View, Left, Body, Right, Button } from 'native-base';
import { Switch } from 'react-native';

export default (structure) => {
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
