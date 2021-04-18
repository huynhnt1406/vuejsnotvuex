<template>
    <div class="posts">
        <PostSearch @searchPost = 'searchPost'/>
        <div class="post-display">
            <div v-for="post in posts" :key="post.id" class="post-ele">
                <div class="poster">
                    <div class="post-avt">
                        <img src="https://www.level10martialarts.com/wp-content/uploads/2017/04/default-image.jpg" alt="postthumnail">
                    </div>
                    <div class="user-info">
                        <router-link class="link" :to="{name:'PostDetail',params: {id:post.id}}"><h3>{{post.title}}</h3></router-link>
                        <small>{{post.body}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PostSearch from '../views/PostSearch'
import {eventBus} from '../main'
Vue.use(VueAxios,axios)
    export default{
        name:"AllPosts",
        components:{
            PostSearch,
        },
        data(){
            return{
                posts:[],
            }
        },
        created(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
                this.posts = res.data
            })
        },
        methods:{
            //search post using  emit
            filterPost(id){
                this.axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
                    this.posts = this.posts.filter(post => post.id == id)
                })
            },
            searchPost(e){
                if(e.target.value === ''){
                    this.getPost()
                }else{
                    this.filterPost(e.target.value)
                }
            }
        },
        mounted(){
            eventBus.$on('removePost' , (id) =>{
                this.posts = this.posts.filter(post => post.id !== id)
            })
            eventBus.$on('updatePost', (data) => {
                const index = this.posts.findIndex(post => data.id === post.id)
                if(index !== -1){
                    this.posts.splice(index,1, data)
                }
            })
        }
    }
</script>

<style scoped>
.post-avt img{
    height: 140px;
    width: 190px;
    padding:10px;
}
.poster{
    display: flex;
    align-items: center;
    font-family: "Montserrat",sans-serif;
    font-size: 14px;
    width:500px;
}
.post-ele{
    display: flex;
}
.post-display{
    height: 500px;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.user-info .link{
    text-decoration: none;
    color:black
}
</style>