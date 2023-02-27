<template>
  <div class="bg-main relative">
    <Container>
      <nav class="py-4 flex justify-between items-center sticky top-0 z-10">
        <div class=" md:w-52 w-44">
          <img
              src="/portfolio-logo.png"
              alt='Muhammadalli NB'
              class="w-full h-full"
          >
        </div>
        <ul class="hidden  sm:flex text-lg">
          <li class="mr-5">Bio</li>
          <li class="mr-5">Work</li>
          <li class="mr-5">Projects</li>
          <li>Contacts</li>
        </ul>
        <div @click="sidebarShow" class="w-12 block sm:hidden">
          <img src="/burger_menu.svg" alt="">
        </div>
      </nav>
    </Container>
    <Sidebar :isOpen="sidebarIsOpen"/>
  </div>
</template>

<script>
import Container from "../ui/Container.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Navbar",
  components: {Sidebar, Container},
  data() {
    return {
      sidebarIsOpen: false
    }
  },
  methods: {
    sidebarShow() {
      this.sidebarIsOpen = !this.sidebarIsOpen
    }
  }
}
</script>