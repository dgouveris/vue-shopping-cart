import Vue from "vue";
import Router from 'vue-router'
import ShoppingCart from '../components/ShoppingCart'
import CartView from '../components/CartView'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path:'/CartView',
            name: 'CartView',
            component: CartView 
        }
    ]
});
