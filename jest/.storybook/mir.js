import { create, themes } from '@storybook/theming';
import mirLogo from '../.storybook/assets/img/logo.png';

export default create({
  base: 'light',

  colorPrimary: '#ddd',
  colorSecondary: '#0d88cb',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#ddd',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barHoverTextColor: 'white',
  barSelectedColor: '#ddd',
  barBg: '#0d88cb',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Mobile Industrial Robots',
  brandUrl: 'https://www.mobile-industrial-robots.com',
  brandImage: mirLogo,
});
