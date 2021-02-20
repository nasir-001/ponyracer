<template>
  <!-- Use the default variant color  -->
  <!-- <Alert :dismissible="true"> I'm a danger alert content </Alert> -->
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import Race from '@/components/Race.vue';
import { useRaceService } from '@/composables/RaceService';

export default defineComponent({
  name: 'Races',
  components: {
    Race
  },

  async setup() {
    const raceService = useRaceService();
    const races = ref<Array<RaceModel> | null>(null);

    races.value = await raceService.list();

    return { races };
  }
});
</script>
