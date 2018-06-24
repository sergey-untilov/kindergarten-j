<template>
    <v-container fluid>
        <section>
            <v-parallax :src="wallpaper" height="400">
                <v-layout
                    column
                    align-center
                    justify-center
                    class="white--text"
                >

                    <h1 class="white--text mb-2 display-1 text-xs-center blue-shadow">Детский сад</h1>
                    <div class="subheading mb-3 text-xs-center">Приложение для дошкольных учреждений</div>
                    <div>
                        <v-btn class="blue lighten-2 mt-5" dark large to="/demo">Демо</v-btn>
                        <v-btn class="blue lighten-2 mt-5" dark large to="/register">Регистрация</v-btn>
                        <v-btn class="blue lighten-2 mt-5" dark large to="/login">Вход</v-btn>
                    </div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout
                column
                wrap
                class="my-5"
                align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">The best way to start developing</h2>
                        <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">work</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Руководителю</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Персональный кабинет руководителя.<br>
                                        Расчёт родительской платы с учётом посещения.<br>
                                        Расчёт зарплаты работникам с учётом отработанного времени.<br>
                                        Итоговая отчётность и диаграммы динамики изменения показателей учёта.
                                        <br>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">face</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Родителям</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Персональный кабинет родителя.<br>
                                        Оплата. Архив оплат.<br>
                                        Оповещения об изменениях графика работы, меню, размера оплаты.<br>
                                        Предупреждение о длительном либо кратковременном отпуске, опоздании.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">people_outline</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Персоналу</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Персональный кабинет работника.<br>
                                        Расчётный лист заработной платы.<br>
                                        Pellentesque habitant morbi  et malesuada fames ac turpis egestas.<br>
                                        Nullam in aliquet odio. Aliquam eu  tincidunt. Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax :src="wallpaper" height="400">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                    <em>Зарегистрируйтесь для использования приложения уже сейчас</em>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>777-867-5309</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Chicago, US</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
        data: () => ({
            wallpaper: '/static/img/kindergarten-wallpaper-8.jpg'
        })
    }
</script>
