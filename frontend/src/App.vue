<template>
    <v-app>
        <app-header></app-header>
        <v-content>
            <div class="ma-3">
                <router-view/>
            </div>
        </v-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>

    import AppHeader from '@/components/Header'
    import AppFooter from '@/components/Footer'

    export default {
        components: {
            AppHeader,
            AppFooter
        },
        name: 'App'
    }
</script>

// Global styles
<style>
    .headline {
        color: #2196F3;
    }
    .#64B5F6-shadow {
        text-shadow:
            1px 1px 1px #64B5F6,
            1px -1px 1px #64B5F6,
            -1px 1px 1px #64B5F6,
            -1px -1px 1px #64B5F6;
    }

    a {
        text-decoration: none;
    }

    .container {
        padding: 0px;
    }
</style>
