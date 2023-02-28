<template>
  <Container>
    <div class="h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between">
      <div class="flex sm:block flex-col items-center ">
        <h1 class="text-4xl sm:text-5xl text-indigo-500 font-medium">Hi, i'm Muhammadali</h1>
        <h3 class="text-2xl sm:text-3xl">Frontend Developer</h3>
        <div class="flex items-center mt-2">
          <div class="w-8 mr-2">
            <img class="w-full h-full" src="/social/github.svg" alt="">
          </div>
          <div class="w-8 mr-2">
            <img class="w-full h-full" src="/social/instagram.svg" alt="">
          </div>
          <div class="w-10 mr-2">
            <img class="w-full h-full" src="/social/telegram.svg" alt="">
          </div>
          <div class="w-8">
            <img class="w-full h-full" src="/social/mail.svg" alt="">
          </div>
        </div>
      </div>
      <div class="max-w-xs w-full mb-4">
        <img class="w-full h-full" src="/vite.svg" alt="">
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../ui/Container.vue";

export default {
  name: "Header",
  components: {Container}
}
</script>

<style scoped>

</style>