import { configure } from '@storybook/vue';
import { addParameters } from '@storybook/vue';
import Mir from './mir'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults.
addParameters({
  options: {
    theme: Mir,
  },
});

configure(loadStories, module);
