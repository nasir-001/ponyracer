<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ startInstant }}</p>
    <div class="row">
      <div class="col" v-for="pony of ponies" :key="pony.id">
        <Pony :ponyModel="pony" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RaceModel } from '@/models/RaceModel';
import { computed, defineComponent, PropType, toRefs } from 'vue';
import fromNow from '@/utils/FromNow';
import Pony from '@/components/Pony.vue';

export default defineComponent({
  name: 'Race',
  components: {
    Pony
  },

  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  },

  setup(props) {
    // format the startInstant to more readable using the fromNow function
    // that is imported from utils directory.
    const startInstant = computed(() => fromNow(props.raceModel.startInstant));

    // destructure the code so that we can write {{ name }} directly in the
    // template instead of writting {{ props.ponyModel.name }}
    return { ...toRefs(props.raceModel), startInstant };
  }
});
</script>
