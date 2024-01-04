import React from 'react';
import {View} from 'react-native';
import {Route} from 'react-native-tab-view';
import {Icon} from '~/components/Icon';
import {
  TabContainer,
  TabBarContainer,
  SubTitleTabBar,
  TextTabBar,
} from './styles';

interface IRouteProps extends Route {
  subtitle?: string;
  icone?: string;
}

interface IRenderLabelProps {
  route: IRouteProps;
}

interface TabsProps {
  tabValue: number;
  tabs: Array<any>;
  onChange: (index: number) => void;
  renderScene: any;
  defaultIcon: string;
}

export function Tabs({
  tabValue,
  onChange,
  tabs,
  renderScene,
  defaultIcon,
}: TabsProps) {
  return (
    <TabContainer
      navigationState={{index: tabValue, routes: tabs}}
      onIndexChange={onChange}
      renderScene={renderScene}
      renderTabBar={(props: any) => (
        <TabBarContainer
          {...props}
          indicatorStyle={{
            backgroundColor: '#3D5CFF',
          }}
          renderLabel={({route, ...rest}: IRenderLabelProps) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {route.subtitle && (
                <Icon
                  name={route.icone || ''}
                  defaultIcon={defaultIcon || 'class'}
                  size={20}
                />
              )}
              <TextTabBar {...rest}>{route.title}</TextTabBar>
              {route.subtitle && (
                <SubTitleTabBar {...rest}>{route.subtitle}</SubTitleTabBar>
              )}
            </View>
          )}
        />
      )}
    />
  );
}
