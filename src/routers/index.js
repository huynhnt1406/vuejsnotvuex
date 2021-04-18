import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDetail from '../views/UserDetail'
import PostDetail from '../views/PostDetail'
import Users from '../views/Users'
import Posts from '../views/Posts'
import Login from '../views/Login'
Vue.use(VueRouter);
const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login,
    },
    {
        path:'/users',
        name:'Users',
        component:Users,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                alert('you have to login first')
                next('/login')
            }
        }
    },
    {
        path:'/posts',
        name:'Posts',
        component:Posts,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                next('/login')
            }
        }
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