<template>
  <div class="w-full">
    <div class="relative pt-[56%] w-full">
      <div class="absolute left-0 top-0 w-full h-full rounded-md overflow-hidden">
        <img :src="image" :alt="name" class="w-full h-full">
      </div>
    </div>
    <h3 class="text-2xl mt-2">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: ['image', 'name']
}
</script>