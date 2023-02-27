<template>
  <div class="py-12 sm:my-16">
    <Container>
      <h1 class="text-2xl">My contacts:</h1>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-8 place-items-center mt-8">
        <div class="w-24">
          <img class="w-full h-full" src="/social/github.svg" alt="">
        </div>
        <div class="w-24">
          <img class="w-full h-full" src="/social/instagram.svg" alt="">
        </div>
        <div class="w-28">
          <img class="w-full h-full" src="/social/telegram.svg" alt="">
        </div>
        <div class="w-24">
          <img class="w-full h-full" src="/social/mail.svg" alt="">
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../ui/Container.vue";

export default {
  name: "Contact",
  components: {Container}
}
</script>