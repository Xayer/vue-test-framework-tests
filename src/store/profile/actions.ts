// profile/actions.ts

import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://jsonplaceholder.typicode.com/users/1',
    }).then((response: { data: any; }) => {
      const payload: User = response && response.data;
      commit('profileLoaded', payload);
    }, (error: any) => {
      console.log(error);
      commit('profileError');
    });
  },
};
