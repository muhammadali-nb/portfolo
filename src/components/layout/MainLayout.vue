<template>
  <div class="relative">
    <Navbar class="sticky top-0 z-10"/>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from "../section/Navbar.vue";
import Sidebar from "../section/Sidebar.vue";

export default {
  name: 'MainLayout',
  components: {Sidebar, Navbar},
  data() {
    return {
      sidebarIsOpen: false
    }
  }
}
</script>