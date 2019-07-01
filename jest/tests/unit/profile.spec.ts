import { shallowMount, createLocalVue, ShallowMountOptions, Wrapper } from '@vue/test-utils';
import Vuex, { Store, Module } from 'vuex';
import Profile from '@/components/profile.vue';
import { ProfileState } from '@/store/profile/types';
import { RootState } from '../../src/store/types';

const localVue = createLocalVue();

localVue.use(Vuex);
let mockStore: Store<ProfileState>;
let wrapper: Wrapper<Profile>;
const fetchData = jest.fn();

describe('Profile.vue', () => {
  beforeEach(() => {
    mockStore = new Vuex.Store({
      modules: {
        profile: {
          namespaced: true,
          actions: { fetchData },
          getters: {
            firstName : () => 'Test',
            lastName : () => 'User',
          },
          state: {
            user: {
              userName: 'rip',
              email: 'test@example.com',
              phone: '',
            },
            error: false,
          }
        },
      },
    });
    fetchData.mockClear();
  });

  it('Displays Fullname if user is present', () => {
    const fullName = 'Test User';
    createWrapper();
    expect(wrapper.findAll('p').at(0).find('span').text()).toBe(fullName);
  });

  it('Displays Fullname if user is present', () => {
    const email = 'test@example.com';
    createWrapper();
    expect(wrapper.findAll('p').at(1).find('span').text()).toBe(email);
  });

  function createWrapper(options: ShallowMountOptions<Profile> = {}): void {
    wrapper = shallowMount(Profile, {
      store: mockStore,
      localVue,
      sync: false,
      ...options,
    });
}
});