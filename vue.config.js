const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/style/main.sass"`,
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?vue/,
                            use: ['pug-plain-loader'],
                        },
                        {
                            use: ['raw-loader', 'pug-plain-loader'],
                        },
                    ],
                },
            ],
        },
    },
});
