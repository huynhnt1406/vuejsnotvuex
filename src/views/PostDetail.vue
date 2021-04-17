<template>
   <div class="formcontainer">
       <div class="postid">
           <h3>Post {{data.id}}</h3>
       </div>
       <div class="formpost">
            <div class="child">
                <label for="">Title</label>
                <input type="text" v-model="data.title">
            </div>
            <div class="child">
                <label for="">Body</label>
                <textarea type="text" v-model="data.body"></textarea>
            </div>
            <div class="buttonpost">
                <button @click="updatePost(data)" >Update</button>
                <button @click="deletePost(data.id)"   >Delete</button>
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
    name:"PostDetail",
    props:['id'],
    data(){
        return{
            data:{
                id:'',
                title : '',
                body : ''
            }
        }
    },
    methods:{
        getPostData(){
            this.axios(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then((res) =>{
                this.data = res.data
                console.log(res.data)
            })
        },
        deletePost(id){
            eventBus.$emit('removePost', id)
            console.log(id);
            this.$router.push({path:'/posts'})
        },
        updatePost(data){
            eventBus.$emit('updatePost',data)
            console.log(data)
            this.$router.push({path:'/posts'})
        }
    },
    mounted(){
        this.getPostData()
    }
    
}
</script>

<style>
.postid{
    position: absolute;
    top:0;
    left:0;
    padding:10px;
    font-family: "Montserrat",sans-serif;
    letter-spacing: 3px;
}
.buttonpost button:focus{
    background-color: blue;
    border-bottom: 2px solid black;
    color:white;
}
.buttonpost button{
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
.buttonpost {
    padding-right: 10px;
}
.child input:focus{
    border-bottom: 2px solid forestgreen;
}
.child textarea:focus{
    border-bottom: 2px solid forestgreen;
}
.formpost .child input{
    margin-left: 10px;
    font-family: "Montserrat",sans-serif;
    width: 230px;
    outline:none;
    border-left: none;
    border-right:none;
    border-top:none;
    border-bottom: 2px solid black;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
}
.child textarea {
    margin-left: 10px;
    font-family: "Montserrat",sans-serif;
    width: 230px;
    outline:none;
    border-left: none;
    border-right:none;
    border-top:none;
    border-bottom: 2px solid black;
    transition: 0.3s ease-in-out;
    height: 100px;
}
.formpost .child{
    padding:10px;
    font-family: "Montserrat",sans-serif;
    display: flex;
    flex-direction: column;
}
.formpost{
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   background-color: white;
   padding:20px;
   box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}
.formcontainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    flex-direction: column;
    position: relative;
}
.postdetail{
    color: black;
}
</style>