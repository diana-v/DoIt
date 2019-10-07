<template>
  <v-app>
    <template v-if="is_logged_in">
      <v-app-bar class="toolbar">
        <v-toolbar-title class="text">Do-It</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-text-field v-model="search" label="Search" single-line hide-details ></v-text-field>
          <v-icon style="color:white; margin-right: 350px;">mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon style="color:white; margin-right: 160px;">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for=" n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer permanent style = "background-color: #A9A9A9;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">To-Do</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <v-content>
            <router-view />
          </v-content>
        </v-container>
      </v-content>

    </template>
    <template v-else>
      <div class="background">
        <login />
      </div>
    </template>
  </v-app>
</template>

<script>
import login from "./components/LoginPage";
export default {
  name: "App",
  data: () => ({
    is_logged_in: true,
    items: [
      { title: "Notes", icon: "mdi-view-dashboard" },
      { title: "Lists", icon: "mdi-image" }
    ],
    right: null
  }),
  components: {
    login
  }
};
</script>

<style>
.background {
  background-image: url("https://images.wallpaperscraft.com/image/leaves_green_plant_126669_3840x2160.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.toolbar {
  background-image: url("https://images.wallpaperscraft.com/image/leaves_green_plant_126669_3840x2160.jpg");
  opacity: 0.7;
}

.text {
  color: white;
  font-weight: bold;
  margin: 80px;
}
</style>