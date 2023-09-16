import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppEntry: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text>App Entry</Text>
    </View>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
});
