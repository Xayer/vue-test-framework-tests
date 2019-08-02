<template>
  <button @focus="focusCallback" @click="clickCallback" v-text="buttonText">
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class MyButton extends Vue {
    focusCallback(event:Event): void {
		  this.$emit('focus', event);
    }
    
    clickCallback(event:Event): void {
		  this.$emit('click', event);
    }
    /** the text of the button */
    @Prop({default: 'no, this has been overidden by the storybook parent'})buttonText !: string;
  }
</script>
<style lang="scss">
  button {
    border: none;
    color: #FFF;
    text-shadow: 0px 1px 2px #000;
    width: 100px;
    padding: 10px 15px;
    &:disabled {
      color: #999;
    }
  }
</style>

