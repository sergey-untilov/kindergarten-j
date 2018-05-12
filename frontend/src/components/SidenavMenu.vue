<template>
  <v-list>
        <template v-for="(item, index) in items">

        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
        <v-list-tile v-else :key="item.title" value="true" :to="item.link" router>
          
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </template>
      </v-list>
</template>

<script>
export default {
  name: 'SidenavMenu',
  data: () => ({
      items: [
        {
          icon: "message",
          title: "Сообщения",
          link: "dashboard"
        },
        { divider: true, inset: false },
        {
          icon: "people_outline",
          title: "Персонал",
          link: "personnel"
        },
        {
          icon: "child_care",
          title: "Дети",
          link: "children"
        },
        {
          icon: "accessibility",
          title: "Родители",
          link: "parents"
        },
       { divider: true, inset: false },
        {
          icon: "schedule",
          title: "График работы",
          link: "schedule"
        },
        {
          icon: "restaurant_menu",
          title: "Меню",
          link: "menu"
        },
        {
          icon: "playlist_add_check",
          title: "Посещение",
          link: "attendance"
        },
        { divider: true, inset: false },
         {
          icon: "payment",
          title: "Оплата",
          link: "payment"
        },
        {
          icon: "account_balance_wallet",
          title: "Зарплата",
          link: "salary"
        },
        {
          icon: "assessment",
          title: "Отчёты",
          link: "reports"
        },
        { divider: true, inset: false },
        {
          icon: "settings",
          title: "Настройка",
          link: "settings"
        },
        {
          icon: "help_outline",
          title: "Справка",
          link: "help"
        }
      ]
  })
}
</script>
