import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';

const BottomTabs = createBottomTabNavigator();

const BottomTabsStack: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Tools" component={HomeScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsStack;
