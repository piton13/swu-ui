import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import Home from "@/components/Home";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/hello-world', component: HelloWorld },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);

app.use(router)
app.mount('#app')
