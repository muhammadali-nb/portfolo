<template>
  <div class="py-12 sm:my-16">
    <Container>
      <h1 class="text-2xl mb-3">Projects:</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4  gap-y-8 sm:gap-y-4">
        <ImageCard v-for="item in projects" :image="item.image" :key="item.id" :name="item.name"/>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../ui/Container.vue";
import ImageCard from "../ui/ImageCard.vue";

export default {
  name: "Projects",
  components: {ImageCard, Container},
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Luval',
          image: '/projects/nft.png'
        },
        {
          id: 2,
          name: 'Isystem online',
          image: '/projects/isystem-online.png'
        },

        {
          id: 3,
          name: '100K',
          image: '/projects/100k.png'
        },
        {
          id: 4,
          name: 'Movienest',
          image: '/projects/movienest.png'
        }
      ]
    }
  }
}
</script>