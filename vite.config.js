import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue2";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 // "resources/sass/vendor.scss",
//                 // "resources/js/vendor.js",
//                 "resources/sass/app.scss",
//                 "resources/js/app.js",
//             ],
//             refresh: true,
//         }),
//         vue({
//             template: {
//                 transformAssetUrlsOptions: {
//                     base: null,
//                     includeAbsolute: false,
//                 },
//             },
//             runtimeCompiler: true,
//         }),
//     ],
// });

export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm.js",
        },
    },
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrlsOptions: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            runtimeCompiler: true,
        }),
    ],
});
