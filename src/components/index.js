import Vue from 'vue'

const requireComponent = require.context('./modules', false, /\.vue$/)

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)

    const componentName = fileName
        .replace(/-(.)/g, function (match, group) {
            return group.toUpperCase()
        })
        .replace(/(\.\/|\.vue)/g, '')
        .replace(/^\w/, (c) => c.toUpperCase())

    Vue.component(componentName, componentConfig.default || componentConfig)
})
