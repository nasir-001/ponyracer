<template>
  <nav class="navbar navbar-expand-md colla navbar-light bg-light">
    <a class="navbar-brand">PonyRacer</a>
    <button @click="toggleNavbar()" type="button" class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbar" class="navbar-collapse" :class="{ collapse: navbarCollapse }">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link">Races</a>
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
    const navbarCollapse = ref(true);

    const toggleNavbar = () => {
      navbarCollapse.value = !navbarCollapse.value;
    };

    return { navbarCollapse, toggleNavbar };
  }
});
</script>
