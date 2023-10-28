import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const COLORS = {
  primary: '#1F1190',
  secondary: '#FC6A03',
  black: '#000000',
  white: '#ffffff',
};

const IMAGES = {
  backgroundImage: require('../Images/png/imgbg.png'),
};

export {windowHeight, windowWidth, COLORS, IMAGES};
