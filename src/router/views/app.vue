<template>
    <body id="app">
        <header>
            <navbar />
        </header>
        <router-view />
    </body>
</template>

<style lang="scss">
// initialize project fonts from @assets
@font-face {
    font-family: 'Jost';
    src: local('~@/assets/fonts/Jost-400-Book'), url('~@/assets/fonts/Jost-400-Book.ttf') format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'Jost';
    src: local('~@/assets/fonts/Jost-500-Medium'), url('~@/assets/fonts/Jost-500-Medium.ttf') format('truetype');
    font-weight: 500;
}

@font-face {
    font-family: 'remixicon';
    src: url('~@/assets/fonts/icons/remixicon.eot?t=1618913307717');
    src: url('~@/assets/fonts/icons/remixicon.eot?t=1618913307717#iefix') format('embedded-opentype'), url('~@/assets/fonts/icons/remixicon.woff2?t=1618913307717') format('woff2'),
        url('~@/assets/fonts/icons/remixicon.woff?t=1618913307717') format('woff'), url('~@/assets/fonts/icons/remixicon.ttf?t=1618913307717') format('truetype'),
        url('~@/assets/fonts/icons/remixicon.svg?t=1618913307717#remixicon') format('svg');
    font-display: swap;
}

:root {
    // project color map
    --main-color: #31456a;
    --main-theme: #00d9f5;
    // the Greek alphabet as namespaces
    --theme-alpha: #ebf3fa;
    --theme-beta: #dde7f3;
    --theme-gamma: #e6f0f9;

    // project font-family
    --main-font-family: 'Jost', Helvetica, Arial, sans-serif;

    // project default font size
    --main-font-size: 16px;

    // project default icons-family
    --main-char-family: 'remixicon';

    // project default template width
    --main-base-width: 100%;

    // project default container width
    --parrent-width: 1130px;

    // project default template width
    --parrent-padding: 1em 2em;
}

// project reset css
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
}

body {
    background-image: linear-gradient(to right, #e9f0f8 0%, #dee7f4 100%);
    color: var(--main-color);
    font: 400 var(--main-font-size) / 1.64 var(--main-font-family);

    margin: auto;
}

h1,
h2,
h3,
h4,
h5 {
    font-weight: 500;
    margin: 0;
}

a {
    color: inherit;
    opacity: 0.3;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &.router-link-exact-active {
        opacity: 1;
    }
}

b {
    font: 500 var(--main-font-size) / 1.64 var(--main-font-family);
}

span {
    display: block;
    margin: 1em 0;
    max-width: 680px;
    opacity: 0.3;
}

br {
    display: block;
    margin: 0.5em 0;
}

ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
    }
}

input,
button {
    background: none;
    border: none;
    box-shadow: none;
    color: inherit;

    font: 400 var(--main-font-size) / 1.64 var(--main-font-family);

    margin: 0;
    outline: none;
    padding: 0;
}

// set default button properties
button {
    border-radius: calc(1.2em * 0.8);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #ffffff;
    margin: 2em 1em 0 0;
    padding: var(--parrent-padding);
    position: relative;
}

button:active,
.active {
    box-shadow: inset 3px 3px 6px #ccdbe8, inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5);
}

article {
    align-items: center;
    cursor: default;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-gap: 1em;
    padding: var(--parrent-padding);

    &:hover {
        background: #ffc078;
    }
}

.container {
    margin: auto;
    max-width: var(--parrent-width);
}

section {
    background-color: #e4edf7;
    border-radius: calc(1.2em * 0.8);

    &.outset {
        box-shadow: 6px 2px 16px rgba(136, 165, 191, 0.48), -6px -2px 16px rgba(255, 255, 255, 0.8);
    }

    &.inset {
        box-shadow: inset 3px 3px 6px #ccdbe8, inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5);
    }
}

blockquote {
    max-width: 480px;
    opacity: 0.5;
    position: relative;

    &::before {
        content: '';
        border-left: 6px solid var(--main-color);
        position: absolute;
        left: -2em;
        top: 0;
        bottom: 0;
        opacity: 0.2;
    }

    a {
        opacity: 1;
        text-decoration: underline;
    }
}
header {
    background: inherit;
    box-shadow: 3px 1px 6px rgba(136, 165, 191, 0.48), -6px -2px 16px rgba(255, 255, 255, 0.8);
    padding: 2em 1em;
    position: sticky;
    top: 0;
    z-index: 1;
    margin: 0 auto 4em;
}
</style>
