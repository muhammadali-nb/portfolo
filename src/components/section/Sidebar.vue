<template>
  <div
      class="h-full w-0 opacity-0 px-4 py-6 z-20 bg-indigo-600 fixed right-0 top-0 transition ease-in-out delay-550"
      :style="{ opacity: isOpen ? 1 : 0, width: isOpen ? '256px' : 0}"
  >
    <ul class="text-lg">
      <li class="mb-5">Bio</li>
      <li class="mb-5">Work</li>
      <li class="mb-5">Projects</li>
      <li>Contacts</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ['isOpen']
}
</script>