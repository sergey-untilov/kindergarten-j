<template>
    <div>

    <!-- Sidenav -->
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      height="90%"

    >
        <sidenav-menu></sidenav-menu>
    </v-navigation-drawer>


      <!-- Header -->
    <v-toolbar
      app
      :clipped-left="clipped"
      color="blue"
      dark
      dense
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <img src="@/assets/logo-min.png" width="32" height="32">
      </v-toolbar-side-icon>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon>
        <v-icon>search</v-icon>
      </v-btn>

      <user-menu></user-menu>

    </v-toolbar>
    </div>
</template>

<script>
import SidenavMenu from "@/components/SidenavMenu";
import UserMenu from "@/components/UserMenu";

export default {
  name: "AppHeader",
  components: { SidenavMenu, UserMenu },
  data: () => ({
    title: "Детский сад",
    miniVariant: false,
    right: true,
    rightDrawer: false,
    clipped: true,
    drawer: false,
    fixed: false
  })
};
</script>
