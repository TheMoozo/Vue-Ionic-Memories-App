<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <!-- <ion-label position="floating">Image Url</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" /> -->
        <ion-thumbnail slot="start">
          <img :src="chosenImageUrl" />
        </ion-thumbnail>
        <ion-button @click="takePhoto" type="button" fill="clear">
          Take Photo
          <ion-icon slot="start" :icon="camera"> </ion-icon>
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>

      <ion-button type="submit" expand="full">Save</ion-button>
    </ion-list>
  </form>
</template>
<script>
import {
  IonIcon,
  IonThumbnail,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
export default {
  emits: ["save-memory-event"],
  components: {
    IonIcon,
    IonThumbnail,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      enteredTitle: "",
      chosenImageUrl: "",
      enteredDescription: "",
      camera,
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 70,
      });
      this.chosenImageUrl = photo.webPath;
    },
    submitForm() {
      debugger;
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.chosenImageUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-memory-event", memoryData);
    },
  },
};
</script>
