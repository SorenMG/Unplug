import React from 'react';
import { Scene, Tabs, Stack, ActionConst } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';

import { JobPosting, LoginPage } from '../containers';

const Index = (
  <Stack hideNavBar key="root">
    <Stack hideNavBar key="login" {...DefaultProps.navbarProps}>
      <Scene key="login" component={LoginPage}></Scene>
    </Stack>
    <Stack
      hideNavBar
      type={ActionConst.RESET}
      key="main"
      icon={() => <Icon name="list" {...DefaultProps.icons} />}
      {...DefaultProps.navbarProps}
    >
      <Scene key="main" component={JobPosting} />
    </Stack>
  </Stack>
);

export default Index;
