<template>
  <div class="post">
    <h1>Posts</h1>
    <input type="text" placeholder="name" :value="name" @input="updateName($event)" />
    <Loader v-show="loading" />
    <ul v-show="isActive">
      <li>login:{{ user.login }}</li>
      <li>name:{{ user.name }}</li>
      <li>location:{{ user.location }}</li>
      <li>blog:{{ user.blog }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loader from "@/components/Loader.vue";
import apiClient from "../modules/apiClient";

@Component({
  components: {
    Loader,
  }
})

export default class List extends Vue {
  private user = "";
  private name = "";
  private loading = true;
  private isActive = false;
  private created() {
    this.getUser();
  }
  private updateName($event: Event): void {
    if ($event!.target instanceof HTMLInputElement) {
      this.name = $event!.target.value;
      this.getUser();
    }
  }
  private async getUser() {
    try {
      const response = await apiClient
        .get("/users/" + this.name)
        .then((response) => {
          this.user = response.data;
          this.loading = false;
          this.isActive = true;
        });
    } catch (e) {
      this.loading = false;
      this.isActive = false;
      return e;
    }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
  width: fit-content;
  margin: 0 auto;
}
</style>