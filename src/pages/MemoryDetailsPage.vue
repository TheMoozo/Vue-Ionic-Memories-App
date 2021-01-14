<template>
  <base-layout
    :page-Title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-Default-Back-Link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find data</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :description="loadedMemory.description"
      :image="loadedMemory.image"
    />
  </base-layout>
</template>
<script>
import MemoryOverview from "../components/Memories/MemoryOverview.vue";
export default {
  components: { MemoryOverview },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.getMemory(this.memoryId);
    },
  },
  //   watch: {
  //     $route(currentRoute) {
  //       this.memoryId = currentRoute.params.id;
  //     },
  //   },
};
</script>
