import React, {useEffect} from 'react';
import AppEntry from './src/UI/AppEntry';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

const App: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <>
      <AppEntry />
    </>
  );
};

export default App;
