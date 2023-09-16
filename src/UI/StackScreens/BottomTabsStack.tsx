import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';

const BottomTabs = createBottomTabNavigator();

const BottomTabsStack: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsStack;
