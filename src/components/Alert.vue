<template>
  <div :class="alertClasses">
    <slot></slot>
    <button v-if="canDismiss" @click="dismiss()" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&#215;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Alert',

  props: {
    dismissible: {
      type: Boolean
    },

    variant: {
      type: String,
      default: 'danger'
    }
  },

  // emit dismissed
  emits: ['dismissed'],

  // props as parameter to make it available in the component😊
  setup(props, { emit }) {
    const dismiss = () => {
      emit('dismissed');
    };

    const alertClasses = computed(() => `alert alert-${props.variant}`);

    const canDismiss = computed(() => props.dismissible);

    return { dismiss, alertClasses, canDismiss };
  }
});
</script>
