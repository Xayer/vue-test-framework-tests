import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MyButton from '../src/components/MyButton';
import { Action } from 'vuex-class';

const namespace = 'Atoms/Buttons';

const buttonStories = storiesOf(namespace, module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('Styles', () => ({
  components: { MyButton },
  props: {
		isDisabled: {
			default: boolean('Disabled', false),
    },
    buttonLabel: {
			default: text('Label', 'Hello!'),
    },
    buttonColor: {
			default: color('Button Background color', '#000'),
    },
    textAlignment: {
			default: radios('text align', ['left', 'center', 'right'],'left'),
		},
  },
  methods: {
    focus(event) {
      action('focus')(event);
    },
    click(event) {
      action('click')(event);
    },
  },
  template: `<MyButton @focus="focus($event)"
              @click="click($event)"
              :disabled="isDisabled"
              :style="{backgroundColor: buttonColor, textAlign: textAlignment}"
              :buttonText="buttonLabel"></MyButton>`,
}), {
  info: true
})