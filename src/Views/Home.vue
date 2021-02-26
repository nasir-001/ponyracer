<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <!-- insert the link with the routerLink here -->
      <div class="mt-3">
        <RouterLink class="btn btn-primary" :to="{ name: 'login' }">Login</RouterLink>
      </div>
      <div class="mt-3">
        <RouterLink class="btn btn-primary" :to="{ name: 'register' }">Register</RouterLink>
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
