<template>
  <nav class="navbar navbar-expand-md colla navbar-light bg-light">
    <RouterLink class="navbar-brand text-dark" :to="{ name: 'home' }">PonyRacer</RouterLink>
    <button @click="toggleNavbar()" type="button" class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbar" class="navbar-collapse" :class="{ collapse: navbarCollapsed }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="navbar-brand text-dark" :to="{ name: 'races' }">Races</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',

  setup() {
    const navbarCollapsed = ref(true);
    // toggle the value navbarCollased variable
    // to the opposite of it (true or false)
    const toggleNavbar = () => {
      navbarCollapsed.value = !navbarCollapsed.value;
    };

    return { navbarCollapsed, toggleNavbar };
  }
});
</script>
