import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardinScreens from '../Screens/OnboardinScreens';

const AuthStackScreen = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <AuthStackScreen.Navigator>
      <AuthStackScreen.Screen
        name="OnboardingScreens"
        component={OnboardinScreens}
        options={{headerShown: false}}
      />
    </AuthStackScreen.Navigator>
  );
};

export default AuthStack;
