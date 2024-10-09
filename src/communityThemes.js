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

// Example of registering a theme
registerTheme('community/ocean', {
    primaryColor: '#0077be',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#00a8e8',
    lineColor: '#333333',
    secondaryColor: '#00cccc',
    tertiaryColor: '#2ec4b6'
});
