import { ThemeColors } from '../types';

/**
 * Light theme colors
 */

export const colors: ThemeColors = {
  background: {
    default: '#FFFFFF',
    defaultHover: '#FAFBFC',
    defaultPressed: '#FAFBFC',
    alternative: '#F2F4F6',
    alternativeHover: '#D6D9DC',
    alternativePressed: '#D6D9DC',
  },
  text: {
    default: '#24272A',
    alternative: '#535A61',
    muted: '#BBC0C5',
  },
  icon: {
    default: '#24272A',
    alternative: '#6A737D',
    muted: '#BBC0C5',
  },
  border: {
    default: '#BBC0C5',
    muted: '#D6D9DC',
  },
  overlay: {
    default: '#00000099',
    inverse: '#FCFCFC',
    alternative: '#000000CC',
  },
  shadow: {
    default: '#0000001A',
  },
  primary: {
    default: '#7D4AF7',
    alternative: '#5F35C1',
    muted: '#7D4AF719',
    inverse: '#FCFCFC',
    disabled: '#7D4AF780',
    shadow: '#7D4AF733',
  },
  secondary: {
    default: '#7D4AF7',
    alternative: '#5F35C1',
    muted: '#7D4AF719',
    inverse: '#FCFCFC',
    disabled: '#7D4AF780',
  },
  error: {
    default: '#D73A49',
    alternative: '#B92534',
    muted: '#D73A4919',
    inverse: '#FCFCFC',
    disabled: '#D73A4980',
    shadow: '#D73A4966',
  },
  warning: {
    default: '#F66A0A',
    alternative: '#FFC70A',
    muted: '#FFD33D19',
    inverse: '#FCFCFC',
    disabled: '#FFD33D80',
  },
  success: {
    default: '#28A745',
    alternative: '#1E7E34',
    muted: '#28A74519',
    inverse: '#FCFCFC',
    disabled: '#28A74580',
  },
  info: {
    default: '#037DD6',
    alternative: '#0260A4',
    muted: '#037DD619',
    inverse: '#FCFCFC',
    disabled: '#037DD680',
  },
  networks: {
    goerli: {
      default: '#1098FC',
      inverse: '#FCFCFC',
    },
    localhost: {
      default: '#BBC0C5',
      inverse: '#FCFCFC',
    },
    sepolia: {
      default: '#CFB5F0',
      inverse: '#FCFCFC',
    },
  },
  flask: {
    default: '#8B45B6',
    inverse: '#FCFCFC',
  },
};
