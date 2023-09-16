import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/constants';
import {SafeAreaView} from 'react-native-safe-area-context';
// import ButtonTouchAble from '../Components/ButtonTouchAble';
import {IMAGES} from '../../Utils/data';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardinScreens: React.FC<any> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        {DUMMYDATA.map((item, index) => {
          return (
            <View key={index}>
              <View>
                <Image source={item.icon} />
              </View>
              <Text>{item.title}</Text>
              <Text>{item.desc}</Text>
            </View>
          );
        })}
      </View> */}
      {/* <View style={styles.buttonView}>
        <ButtonTouchAble
          text={'Skip'}
          bgColor={COLORS.white}
          textColor={COLORS.primary}
        />
        <ButtonTouchAble
          text={'Next'}
          bgColor={COLORS.black}
          textColor={COLORS.secondary}
        />
      </View> */}
      <Onboarding
        pages={[
          {
            backgroundColor: COLORS.primary,
            image: <Image source={IMAGES.onboarding_one} />,
            title: 'Organize Your Life Effortlessly',
            subtitle:
              'Discover how BetterTasks can simplify your life. In just a few steps, you will learn how to create tasks, set priorities, and stay on top of your daily agenda.',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardinScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
