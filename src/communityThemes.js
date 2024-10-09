// communityThemes.js

const communityThemes = {};

export function registerTheme(name, theme) {
    if (communityThemes[name]) {
        console.warn(`Theme "${name}" already exists. It will be overwritten.`);
    }
    communityThemes[name] = theme;
}

export function getTheme(name) {
    return communityThemes[name];
}

export function getAllThemes() {
    return Object.keys(communityThemes);
}

registerTheme('ocean', {
    primaryColor: '#0077be',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#00a8e8',
    lineColor: '#333333',
    secondaryColor: '#00cccc',
    tertiaryColor: '#2ec4b6',
});

registerTheme('sunset', {
    primaryColor: '#FF5E5B',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#FF7F50',
    lineColor: '#333333',
    secondaryColor: '#FFB347',
    tertiaryColor: '#FFD1DC',
});

// Forest Theme
registerTheme('forest', {
    primaryColor: '#228B22',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#006400',
    lineColor: '#333333',
    secondaryColor: '#32CD32',
    tertiaryColor: '#98FB98',
});

// Night Sky Theme
registerTheme('night-sky', {
    primaryColor: '#0F0524',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#1A0933',
    lineColor: '#888888',
    secondaryColor: '#4E31A8',
    tertiaryColor: '#8C52FF',
});

// Pastel Theme
registerTheme('pastel', {
    primaryColor: '#AEC6CF',
    primaryTextColor: '#000000',
    primaryBorderColor: '#779ECB',
    lineColor: '#333333',
    secondaryColor: '#FFB347',
    tertiaryColor: '#77DD77',
});

// Monochrome Theme
registerTheme('monochrome', {
    primaryColor: '#D3D3D3',
    primaryTextColor: '#000000',
    primaryBorderColor: '#A9A9A9',
    lineColor: '#333333',
    secondaryColor: '#BEBEBE',
    tertiaryColor: '#E0E0E0',
});

// Earth Theme
registerTheme('earth', {
    primaryColor: '#3E2723',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#5D4037',
    lineColor: '#795548',
    secondaryColor: '#A1887F',
    tertiaryColor: '#D7CCC8',
});

// Candy Theme
registerTheme('candy', {
    primaryColor: '#FF69B4',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#FF1493',
    lineColor: '#DB7093',
    secondaryColor: '#FFB6C1',
    tertiaryColor: '#FFC0CB',
});

// Solarized Light Theme
registerTheme('solarized-light', {
    primaryColor: '#FDF6E3',
    primaryTextColor: '#657B83',
    primaryBorderColor: '#EEE8D5',
    lineColor: '#93A1A1',
    secondaryColor: '#EEE8D5',
    tertiaryColor: '#B58900',
});

// Solarized Dark Theme
registerTheme('solarized-dark', {
    primaryColor: '#002B36',
    primaryTextColor: '#839496',
    primaryBorderColor: '#073642',
    lineColor: '#586E75',
    secondaryColor: '#073642',
    tertiaryColor: '#B58900',
});
