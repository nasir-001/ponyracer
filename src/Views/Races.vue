<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import Race from '@/components/Race.vue';
import { useRaceService } from '@/composables/RaceService';

export default defineComponent({
  name: 'Races',
  components: {
    Race
  },
  setup() {
    const raceService = useRaceService();
    const races = ref<Array<RaceModel> | null>(null);

    onMounted(async () => {
      races.value = await raceService.list();
    });

    return { races };
  }
});
</script>
