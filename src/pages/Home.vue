<template>
  <MainLayout>
    <Header/>
    <Work/>
    <Bio/>
    <Projects/>
  </MainLayout>
</template>

<script>
import Work from "../components/section/Work.vue";
import Bio from "../components/section/Bio.vue";
import Projects from "../components/section/Projects.vue";
import Container from "../components/ui/Container.vue";
import Contact from "../components/section/Contact.vue";
import MainLayout from "../components/layout/MainLayout.vue";
import Header from "../components/section/Header.vue";

export default {
  name: "Home",
  components: {Header, MainLayout, Contact, Container, Projects, Bio, Work}
}
</script>

