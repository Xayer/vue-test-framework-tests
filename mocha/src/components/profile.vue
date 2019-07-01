<template>
    <div class="container">
        <div v-if="profile.user">
            <p>
                Full name: <span v-text="fullName"></span>
            </p>
            <p>
                Email: <span v-text="email"></span>
            </p>
        </div>
        <div v-if="profile.error">
            Oops an error occured
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { ProfileState, User } from '../store/profile/types';

const namespace: string = 'profile';

@Component
export default class UserDetail extends Vue {
        @State('profile') public profile: ProfileState;

        @Action('fetchData', { namespace }) public fetchData: any;

        @Getter('firstName', { namespace }) public firstName: string;

        @Getter('lastName', { namespace }) public lastName: string;

        public mounted() {
          // fetching data as soon as the component's been mounted
          this.fetchData();
        }

        // computed variable based on user's email
        get email() {

          const user = this.profile && this.profile.hasOwnProperty('user') ? this.profile.user : null;
          return user && user.hasOwnProperty('email') ? user.email : null;
        }

        get fullName() {
          return `${this.firstName} ${this.lastName}`;
        }
}
</script>
