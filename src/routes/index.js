import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';

import { FriendRequests, LoginPage } from '../containers';

/**
 * Main Screen
 */
export const Main = (
  <Stack
    hideNavBar
    key="main"
    icon={() => <Icon name="list" {...DefaultProps.icons} />}
    {...DefaultProps.navbarProps}
  >
    <Scene key="main" component={FriendRequests} />
  </Stack>
);

/**
 * Auth Screen
 */
export const Auth = (
  <Stack hideNavBar key="login" {...DefaultProps.navbarProps}>
    <Scene key="login" component={LoginPage}></Scene>
  </Stack>
);
