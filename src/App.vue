<template>
  <Navbar></Navbar>
  <div class="container" style="margin-top: 70px">
    <h1>Ponyracer</h1>
    <!-- alert this component if the error variable is not null -->
    <Alert v-if="error" :dismissible="true">An error occurred while loading</Alert>
    <!-- must use Suspense because the Race component uses async setup -->
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
    // stores string or null (it's null for now)
    const error = ref<string | null>(null);

    // store errorExist to the error variable
    onErrorCaptured(() => {
      error.value = 'errorExist';
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
