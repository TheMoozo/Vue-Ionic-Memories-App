<template>
  <base-layout page-Title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import MemoriesList from "../components/Memories/MemoriesList.vue";
export default {
  components: {
    //addIcon,
    IonButton,
    IonIcon,
    MemoriesList,
  },
  data() {
    return { add };
  },
  computed: {
    memories() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>
BaseLayout
