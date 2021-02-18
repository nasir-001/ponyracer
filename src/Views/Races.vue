<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
  <div v-if="errorMeesage" class="alert alert-danger">
    An error occurred while loading.
    <button @click="errorToggler()" type="button" class="close" aria-label="Close"><span aria-hidden="true">&#215;</span></button>
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
    const errorMeesage = ref(false);
    const races = ref<Array<RaceModel> | null>(null);

    const errorToggler = () => {
      errorMeesage.value = false;
    };

    try {
      onMounted(async () => {
        races.value = await raceService.list();
      });
    } catch (error) {
      errorMeesage.value = true;
    }

    return { races, errorMeesage, errorToggler };
  }
});
</script>
