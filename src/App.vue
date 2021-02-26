<template>
  <Navbar></Navbar>
  <div class="container" style="margin-top: 70px">
    <RouterView v-slot="{ Component }">
      <!-- <Alert v-if="error" dismissible>An error occurred while loading.</Alert> -->
      <Suspense>
        <component :is="Component" />
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
// import Alert from '@/components/Alert.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
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
