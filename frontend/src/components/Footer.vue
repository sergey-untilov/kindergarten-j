<template>
  <v-footer height="auto">
    <v-card flat tile class="flex blue--text">
      <v-card-actions class="grey lighten-2 justify-center">

        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          icon
          class="mx-3"
          :to="icon.link" router
        >
          <v-icon
            size="24px"
            color="blue darken-1">
            {{ icon.name }}
          </v-icon>

        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon
          :to="developer_link" router
          class="mx-3">
            <v-icon size="24px" color="blue darken-1">help_outline</v-icon>
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name: 'AppFooter',
    data: () => ({
      icons: [
        { name: 'fab fa-facebook', link: 'facebook_link' },
        { name: 'fab fa-linkedin', link: 'linkedin_link' },
        { name: 'fab fa-github', link: 'github_link' },
        // { name: 'fab fa-viber', link: 'viber_link' },
        { name: 'email', link: 'company_email' },
        ],
        developer_link: '#'
    })
  }
</script>
