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
                    <v-toolbar-title class="white--text">Вход в личный кабинет</v-toolbar-title>
                </v-toolbar>

                <v-card>
                    <v-form ref="form" v-model="valid" lazy-validation>

                        <v-card-text>
                            <p class="text-xs-center">
                                <router-link :to="{ name: 'register' }">
                                    Требуется регистрация?
                                </router-link>
                            </p>
                        </v-card-text>

                        <v-card-text>

                            <v-text-field
                                v-model="login"
                                :rules="nameRules"
                                :counter="10"
                                label="Логин"
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

                        </v-card-text>

                        <v-card-actions>
                            <v-btn flat icon to="/">
                                <v-icon>fa-arrow-left</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>
                            <!--<v-btn :disabled="!valid" @click="onSubmit" color="info">OK</v-btn>-->
                            <v-btn @click="onSubmit" color="info">Войти</v-btn>
                            <!--<v-btn @click="clear">clear</v-btn>-->
                            <v-btn @click="Home" color="info">Отмена</v-btn>
                        </v-card-actions>

                    </v-form>


                </v-card>

            </v-flex>

        </v-layout>
    </v-container>


<!--
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li
              v-for="(v, k) in errors"
              :key="k">
              {{k}} {{ v | error }}
            </li>
          </ul>
          <form v-on:submit.prevent="onSubmit(email, password)">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
-->
</template>
<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actions.type'

export default {
  data () {
    return {
      login: null,
      password: null
    }
  },
  methods: {
    onSubmit (login, password) {
      this.$store
        .dispatch(LOGIN, { login, password })
        .then(() => this.$router.push({ name: 'home' }))
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>
