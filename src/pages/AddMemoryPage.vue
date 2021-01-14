<template>
  <base-layout page-title="Add Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory-event="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/Memories/CreateMemoryForm";
export default {
  components: { CreateMemoryForm },
  methods: {
    saveMemory(memoryData) {
      debugger;
      this.$store.dispatch("addMemory", memoryData);
      this.$router.replace("/memories");
    },
  },
};
</script>
