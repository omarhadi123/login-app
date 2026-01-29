import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";

/*
--Brand--
100: "#333333"
200: "#171717"

--Secondary--
100: #FFF2FF
200: "#FFF1F1"

--Tertiary--
main: "#33046B"


*/
// primary 1: "#171717"
// primary 2: "#333333"
// secondary 1: "#FFF1F1"
// secondary 2: #FFF2FF
// tertiary: "#33046B"
// main button color: "#33046B"
// DARK text: primary 1 - "#171717"
// BASE text: "#FFF1F1"
// background and inputs on DARK: primary 2 - "#333333"
// background and input on BASE: "#FFF2FF"
// FORM BACKGROUND on DARK: primary 1
// FORM BACKGROUND on BASE: "#FFF1F1"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                hero: {
                    50: {value: "#F9F8F6"},
                    100: {value: "#7600d3"},
                    200: {value: "#2E073F"},
                },
                brand: {
                    50: {value: "#EBD3F8"},
                    100: {value: "#313131"},
                    200: {value: "#1E201E"},
                    300: {value: "#0d0d0d"},
                },
                tertiary: {value: "#EFE9E3"},
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
