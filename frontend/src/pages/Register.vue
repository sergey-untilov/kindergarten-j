<template>

    <v-container align-center>

        <v-layout>

            <v-flex
                xs12
                sm10 offset-sm1
                md8 offset-md2
                lg6 offset-lg3
                xl4 offset-xl4
            >

                <v-toolbar color="blue"
                           dark
                           dense>
                    <v-btn flat icon to="/">
                        <v-icon>fa-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title class="white--text">Регистрация</v-toolbar-title>
                </v-toolbar>

                <v-card>
                    <v-form ref="form" v-model="valid" lazy-validation>

                        <v-card-text>
                            <p class="text-xs-center">
                                <router-link :to="{ name: 'login' }">
                                    Уже зарегистрированы?
                                </router-link>
                            </p>
                        </v-card-text>

                        <v-card-text>

                            <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                :counter="10"
                                label="Имя пользователя"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                label="Пароль"
                                required
                                :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (hidePassword = !hidePassword)"
                                :type="hidePassword ? 'password' : 'text'"
                                hint="Не менее 8 символов"
                                min="8"
                                counter
                            ></v-text-field>
                            <v-select
                                v-model="select"
                                :items="items"
                                :rules="[v => !!v || 'Item is required']"
                                label="Профиль"
                                required
                            ></v-select>
                            <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="Do you agree?"
                                required
                            ></v-checkbox>

                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <!--<v-btn :disabled="!valid" @click="onSubmit" color="info">OK</v-btn>-->
                            <v-btn @click="onSubmit" color="info">Зарегистрировать</v-btn>
                            <!--<v-btn @click="clear">clear</v-btn>-->
                        </v-card-actions>

                    </v-form>


                </v-card>

            </v-flex>

        </v-layout>
    </v-container>

    <!--
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign up</h1>
                        <p class="text-xs-center">
                            <router-link :to="{ name: 'login' }">
                                Уже зарегистрированы?
                            </router-link>
                        </p>
                        <ul v-if="errors" class="error-messages">
                            <li v-for="(v, k) in errors" :key="k">{{k}} {{ v | error }}</li>
                        </ul>
                        <form v-on:submit.prevent="onSubmit">
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" v-model="username" placeholder="Username">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" v-model="email" placeholder="Email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Password">
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            -->
</template>
<script>
    import { mapState } from 'vuex'
    import { REGISTER } from '@/store/actions.type'

    export default {
        name: 'register',
        data () {
            return {
                username: '',
                email: '',
                password: '',
                hidePassword: true,
                items:  ['Руководитель', 'Родитель', 'Работник']
            }
        },
        computed: {
            ...mapState({
                errors: state => state.auth.errors
            })
        },
        methods: {
            onSubmit () {
                this.$store.dispatch(REGISTER, {
                    email: this.email,
                    password: this.password,
                    username: this.username
                })
                    .then(() => this.$router.push({name: 'home'}))
            }
        }
    }
</script>
