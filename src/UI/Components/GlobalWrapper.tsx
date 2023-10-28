import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface GlobalWrapperStyle {
  bgImage: any;
  topLeftComponent?: React.ReactNode;
  //   topLeftCon: boolean;
  topRightComponent?: React.ReactNode;
  topConnHeight: number;
  children: React.ReactNode;
  bottomComponent: React.ReactNode;
  topContainerBg: string;
  mTopChildren: number;
}

const GlobalWrapper: React.FunctionComponent<GlobalWrapperStyle> = ({
  topLeftComponent,
  children,
  bgImage,
  bottomComponent,
  topRightComponent,
  topContainerBg,
  topConnHeight,
  mTopChildren,
}) => {
  return (
    <ImageBackground source={bgImage} style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <View>
          <View
            style={[
              styles.topConn,
              {backgroundColor: topContainerBg, height: topConnHeight},
            ]}>
            {topLeftComponent}
            {topRightComponent}
          </View>
          <View style={[styles.children, {marginTop: mTopChildren}]}>
            {children}
          </View>
        </View>
      </SafeAreaView>
      <View>{bottomComponent}</View>
    </ImageBackground>
  );
};

export default GlobalWrapper;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeftView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  safeAreaView: {
    width: '100%',
  },
  children: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  topConn: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
