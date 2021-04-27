import Vue from 'vue'
import app from './router/views/app.vue'
import router from './router'

// initialize component autoloader
import './components'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(app)
}).$mount('#app')
