<template>
  <v-container>
    <div class="log_in">
      <h1>Do-It</h1>
      <form>
        <v-text-field
          v-model="user_email"
          label="E-mail"
          required
          dark
          style="text-color:white"
        ></v-text-field>
        <v-text-field
          v-model="user_password"
          label="Password"
          required
          color="white"
          dark
        ></v-text-field>
        <v-btn class="mr-4" @click="log_in">Log-In</v-btn>
        <v-btn @click="sign_up">Sign-Up</v-btn>
      </form>
    </div>
  </v-container>
</template>

<style scoped>
.log_in::before {
  content: "";
  background: url("https://images.wallpaperscraft.com/image/leaves_green_plant_126669_3840x2160.jpg")
    0 0 / cover fixed no-repeat;
  filter: blur(10px);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
}
.log_in {
  border: 3px solid white;
  position: absolute;
  color: white;
  padding: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>

<script>
export default {
  data: () => ({
    user_email: "",
    user_password: ""
  }),
  methods: {
    log_in() {
    },
    sign_up() {
      this.user_email = "";
      this.user_password = "";
    }
  }
};
</script>