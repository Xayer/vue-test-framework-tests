/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import { withInfo, setDefaults } from 'storybook-addon-vue-info';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

addParameters({
	options: {
		hierarchyRootSeparator: / - /,
	},
});

// Require all the .stories.js files from all components
const req = require.context('../stories', true, /\.js$/);

function loadStories() {
	req.keys().forEach((filePath) => {
    const componentName = filePath.replace(/^.+\/([^/]+)\.js/, '$1');
		const component = req(filePath);
		Vue.component(componentName, component);
		return component;
	});
}

setDefaults({
	header: false,
	source: false,
	docsInPanel: false
});

addDecorator(withInfo);

addDecorator(StoryRouter());

configure(loadStories, module);