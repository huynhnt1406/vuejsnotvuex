<template>
    <div class="users" >
        <UserSearch @filterUser = 'searchUser'/>
        <div class="user-display">
            <div v-for="user in users" :key="user.id" class="user-ele">
                <div class="user-left">
                    <div class="user-avt">
                        <img src="https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png" alt="useravt">
                    </div>
                    <div class="user-info">
                        <h3>{{user.username}}</h3>
                        <small>{{user.email}}</small>
                    </div>
                </div>
                <div class="user-right">
                    <router-link class="link" :to="{name:'UserDetail',params:{id:user.id}}"><p>Detail</p></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import UserSearch from '../views/UserSearch'
import { eventBus } from '../main'
//import {eventBus} from '../main'
Vue.use(VueAxios,axios)
export default {
    name:'AllUser',
    components:{
        UserSearch
    },
    data(){
        return{
            users:[],
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.users = res.data)
        eventBus.$on('removeUser',this.removeUser)
        eventBus.$on('updatedUser',this.updateUser)
    },
    methods:{ 
        
        getUsers(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.users = res.data)
            
        },
        removeUser(id){
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(this.users = this.users.filter(user => user.id !== id))
            this.$forceUpdate()
            console.log(this.users)
        },
        updateUser(data){
            const index = this.users.findIndex(user => user.id === data.id)

            if(index !== -1){
                axios.post(`https://jsonplaceholder.typicode.com/users/${data.id}`)
                    .then(this.user = this.users.splice(index,1,data))
            }
            this.$forceUpdate()
            console.log(this.users)
        },
        //search post by using emit
        filterUser(id){
            this.axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
                this.users = this.users.filter(user => user.id == id)
            })
        },
        searchUser(e){
            if(e.target.value === ''){
                this.getData()
            }else{
                this.filterUser(e.target.value)
            }
        },
        //update users list 
    },
    mounted(){
        this.getUsers()
    },
    updated(){
    }   
}
</script>

<style  scope>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
.user-avt img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
}
.user-left {
    display: flex;
    align-items: center;
}
.user-ele{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5vh 10vh 0 10vh;
    font-family: "Montserrat",sans-serif;
}
.users{
    display: flex;
    flex-direction: column;
}
.user-display{
    overflow-y: scroll;
    height: 500px;
}
.user-right p{
    font-family: "Montserrat",sans-serif;
}
.user-headline h3{
    padding-left:10vh;
    padding-top: 5vh;
    font-family: "Montserrat",sans-serif;
}
.user-right .link{
    font-size: small;
    text-decoration: none;
    font-weight: 1000;
    color:black;
    border-bottom: 2px solid transparent;
}
</style>