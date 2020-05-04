/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import HeaderComponent from "./components/HeaderComponent";

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('binding-component', require('./components/BindingComponent.vue').default);
Vue.component('cat-list', require('./components/CatListComponent.vue').default);
Vue.component('HeaderComponent', require('./components/HeaderComponent.vue').default);
Vue.component('QuestionsComponent', require('./components/QuestionsComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ExampleComponent from './components/ExampleComponent';
import BindingComponent from './components/BindingComponent';
import QuestionsComponent from "./components/QuestionsComponent";

let routes = [
    { path: '/', component: ExampleComponent },
    { path: '/binding', component: BindingComponent },
    { path: '/question', component: QuestionsComponent },
];

const app = new Vue({
    el: '#app',
    component: {
        HeaderComponent,
        QuestionsComponent,
    },
    prop: {
        question: Object
    },
    created: function() {
        console.log('Created!');
    },
    mounted: function() {
        console.log('Mounted!');
    },
    updated: function() {
        console.log('Updated!');
    },
    destroyed: function() {
        console.log('Destroyed!');
    },
});
