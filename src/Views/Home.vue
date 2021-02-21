<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <!-- insert the link with the routerLink here -->
      <div class="mt-4">
        <RouterLink class="btn btn-primary" :to="{ name: 'home' }">Home</RouterLink>
      </div>
      <div class="mt-4">
        <RouterLink class="btn btn-primary" :to="{ name: 'races' }">Races</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home'
});
</script>
