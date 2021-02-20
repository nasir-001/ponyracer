<template>
  <Navbar></Navbar>
  <div class="container" style="margin-top: 70px">
    <h1>Ponyracer</h1>
    <Alert v-if="error" :dismissible="true">An error occurred while loading</Alert>
    <Suspense>
      <div>
        <Races></Races>
      </div>
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Races from '@/Views/Races.vue';
import Alert from '@/components/Alert.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Races,
    Alert
  },

  setup() {
    const error = ref<string | null>(null);

    onErrorCaptured(() => {
      error.value = 'text';
      return false;
    });

    return { error };
  }
});
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~font-awesome/css/font-awesome.min.css';
</style>
