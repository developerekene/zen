import {Text, View} from 'react-native';
import React from 'react';
import GlobalWrapper from '../Components/GlobalWrapper';
import {IMAGES} from '../../Utils/Constants/constants';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {OnboardFlow} from 'react-native-onboard';

const OnboardinScreens: React.FunctionComponent = ({}) => {
  return (
    <GlobalWrapper
      bgImage={IMAGES.backgroundImage}
      topLeftComponent={
        <View>
          <Text>Top Left</Text>
        </View>
      }
      topRightComponent={
        <View>
          <Text>Top Right</Text>
        </View>
      }
      children={
        <View>
          <Text> Children </Text>
        </View>
      }
      bottomComponent={
        <View>
          <Text>Bottom Component</Text>
        </View>
      }
      topContainerBg={'#E9EBE8'}
      topConnHeight={60}
      mTopChildren={10}
    />
  );
};

export default OnboardinScreens;

// const styles = StyleSheet.create({});
