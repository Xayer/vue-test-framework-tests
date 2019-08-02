// profile/getters.ts

import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  firstName(state): string {
    const { user } = state;
    const nameChunks = (user && user.name) ? user.name.split(' ') : '';
    const firstName = nameChunks ? nameChunks[0] : null;
    return `${firstName}`;
  },
  lastName(state): string {
    const { user } = state;
    const nameChunks = (user && user.name) ? user.name.split(' ') : '';
    const lastName = nameChunks ? nameChunks[1] : null;
    return `${lastName}`;
  },
};
