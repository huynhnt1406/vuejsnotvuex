import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDetail from '../views/UserDetail'
import PostDetail from '../views/PostDetail'
import Users from '../views/Users'
import Posts from '../views/Posts'
Vue.use(VueRouter);
const routes = [
    {
        path:'/users',
        name:'Users',
        component:Users
    },
    {
        path:'/posts',
        name:'Posts',
        component:Posts
    },
    {
        path:'/users/userdetail/:id',
        name:'UserDetail',
        component:UserDetail,
        props:true
    },
    {
        path:'/posts/postdetail/:id',
        name:'PostDetail',
        component:PostDetail,
        props:true
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router