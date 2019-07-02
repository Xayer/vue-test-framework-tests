import { create, themes } from '@storybook/theming';
import mirLogo from '../.storybook/assets/img/logo.png';

export default create({
  base: 'light',
  colorSecondary: '#0d88cb',

  // UI
  appBg: 'rgb(117, 172, 216)',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barHoverTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#0d88cb',

  
  brandTitle: 'Mobile Industrial Robots',
  brandUrl: 'https://www.mobile-industrial-robots.com',
  brandImage: mirLogo,
});
