<template>
   <div class="formcontainer">
       <div class="userid">
           <h3>User {{data.id}}</h3>
       </div>
       <div class="formuser">
            <div class="child">
                <label for="">Full name</label>
                <input type="text" v-model.lazy="data.name">
            </div>
            <div class="child">
                <label for="">User name</label>
                <input type="text" v-model.lazy="data.username">
            </div>
            <div class="child">
                <label for="">Email</label>
                <input type="text" v-model.lazy="data.email">
            </div>
            <div class="child">  
                <label for="">Street</label>
                <input type="text" v-model.lazy="data.address.street">
            </div>
            <div class="child">
                <label for="">City</label>
                <input type="text" v-model.lazy="data.address.city">
            </div>
            <div class="buttonuser">
                <button  @click="updateUser(data)" >Update</button>
                <button @click="deleteUser(data.id)" >Delete</button>
            </div>
       </div>
   </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import {eventBus} from '../main'
Vue.use(VueAxios,axios)
export default {
    name:"UserDetail",
    props:{
        id:{Number},
    },
    data(){
        return{
            data:{
                id:'',
                name:'',
                username:'',
                email:'',
                address: {
                    street:'',
                    city:''
                }
            }
        }
    },
    created(){
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).then((res) => {
            this.data = res.data
        })
    },
    methods:{
        deleteUser(id){
            eventBus.$emit('removeUser', id)
            this.$router.push({path:'/users'})
        },
        updateUser(data){
            eventBus.$emit('updatedUser', data)
            this.$router.push({path:'/users'})
        },
    },
}
</script>

<style>
.userdetail{
    color: black;
}
.formcontainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    flex-direction: column;
    position: relative;
}
.formuser{
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   background-color: white;
   padding:20px;
   box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}
.child{
    padding:10px;
    font-family: "Montserrat",sans-serif;
}
.child input{
    margin-left: 10px;
    font-family: "Montserrat",sans-serif;
    width: 170px;
    outline:none;
    border-left: none;
    border-right:none;
    border-top:none;
    border-bottom: 2px solid black;
    transition: 0.3s ease-in-out;
}
.child input:focus{
    border-bottom: 2px solid forestgreen;
}
.buttonuser {
    padding-right: 10px;
}
.buttonuser button{
    outline:none;
    border-left: none;
    border-right:none;
    border-top:none;
    border-bottom: 1px solid black;
    transition: 0.3s ease-in-out;
    color:white;
    margin-left:10px;
    font-size: x-small;
    padding-top:5px;
    background-color: transparent;
    color:black;
}
.buttonuser button:focus{
    background-color: blue;
    border-bottom: 2px solid black;
    color:white;
}
.userid{
    position: absolute;
    top:0;
    left:0;
    padding:10px;
    font-family: "Montserrat",sans-serif;
    letter-spacing: 3px;
}
</style>