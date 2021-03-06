import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css';

window.$ = window.jQuery = require("jquery")

const router = new VueRouter()


router.map({
    '': {
        name: 'posts',
        component: require('./components/posts.vue')
    },
    '/post/:id': {
        name: 'post',
        component: require('./components/single.vue')
    },
    'new-post/' :{
        name: 'new-post',
        component: require('./components/new-post.vue')
    }
})

router.start(App, '#app')