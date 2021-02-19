<template>
  <figure @click="clicked()">
    <img :src="ponyImageUrl" :alt="name" />
    <figcaption>{{ name }}</figcaption>
  </figure>
</template>

<script lang="ts">
import { PonyModel } from '@/models/PonyModel';
import { computed, defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  name: 'Pony',

  props: {
    ponyModel: {
      type: Object as PropType<PonyModel>,
      required: true
    }
  },

  emits: ['ponySelected'],

  setup(props, { emit }) {
    const ponyImageUrl = computed(() => `/images/pony-${props.ponyModel.color.toLowerCase()}.gif`);

    const clicked = () => {
      emit('ponySelected');
    };

    return { ...toRefs(props.ponyModel), ponyImageUrl, clicked };
  }
});
</script>

<style scoped>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}
img {
  height: 50px;
}
</style>
