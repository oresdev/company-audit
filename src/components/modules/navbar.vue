<template>
    <nav class="nav">
        <router-link to="/" v-text="`Base`" />
        <router-link to="/ux" v-text="`Designer UX/UI`" />
        <router-link to="/pm" v-text="`Project / Product manager`" />
        <router-link to="/dev" v-text="`Frontend dev`" />
        <router-link to="/dev" v-text="`iOS / Android dev`" />
        <router-link to="/ceo" v-text="`CEO`" />
        <router-link to="/cto" v-text="`CTO`" />
        <router-link to="/hr" v-text="`HR`" />
    </nav>
</template>

<style lang="scss" scoped>
nav {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: auto;
    max-width: var(--parrent-width);

    a {
        margin: 0 1em;

        &:last-child {
            margin: 0 0 0 1em;
        }
    }
}
</style>
