// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        {
            path: '~/components/',
            pathPrefix: false,
        },
    ],
    css: [
        '~/assets/css/roboto.css',
        '~/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
