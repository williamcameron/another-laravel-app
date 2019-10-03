import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

//import Home from './views/Home'
const Home = () => import (/* webpackChunkName: "group-home" */ './views/Home.vue')
//import Login from './views/Login'
const Login = () => import (/* webpackChunkName: "group-login" */ './views/Login.vue')
// import Register from './views/Register'
const Register = () => import(/* webpackChunkName: "group-register" */ './views/Register.vue')
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ],
});