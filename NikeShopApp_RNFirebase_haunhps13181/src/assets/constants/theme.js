import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const colors = {
    dark: {
        background: '#252525',
        foreground: '#FFFFFF'
    },
    light: {
        background: '#FFFFFF',
        foreground: '#000000'
    },
    clouds: '#ecf0f1',
    silver: '#bdc3c7',
    gray: '#7f8c8d',
    green: '#00bf00',
    red: '#ff2234'
}

export const sizes = {
    h1: 8,
    h2: 11,
    h3: 15,
    h4: 19,
    h5: 23,
    h6: 28,

    // App Dimensions
    width,
    height
}

export default {
    colors,
    sizes
}


export const COLORS = {
    // base colors
    primary: "#a6c13c", // Green
    secondary: "#454c5d",   // Gray

    // Render color
    cam : '#fc0331',
    yellow: '#fcba03',
    blueLight1 : '#03fc77',
    blueLight2 : '#037bfc',
    tim : '#7b03fc',
    hong : '#fc0373',
    do : '#fc0331',

    // colors
    black: "#1E1F20",
    blue: "#000D6A",
    white: "#FFFFFF",
    lightGray: "#ABAFB8",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    gray: "#BEC1D2",
    blue: '#42B0FF',
    darkGreen: '#59990F',
    darkGray: '#898C95',
    transparentLightGray: '#CCD4D5D6',
    transparentLightGray1: 'rgba(255,255,255,0.7)',

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    margin: 10,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};


export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

export const appTheme = { COLORS, SIZES, FONTS };
