import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './StackScreens/AuthStack';
import BottomTabsStack from './StackScreens/BottomTabsStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type RootStackParamList = {
  AuthScreens: undefined;
  BottomTabsScreen: undefined;
};

const AppEntryStack = createNativeStackNavigator();

const AppEntry: React.FC<RootStackParamList> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppEntryStack.Navigator initialRouteName="AuthScreens">
          <AppEntryStack.Screen
            name="AuthScreens"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <AppEntryStack.Screen
            name="BottomTabs"
            component={BottomTabsStack}
            options={{headerShown: false}}
          />
        </AppEntryStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppEntry;
