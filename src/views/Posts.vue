<template>
    <div class="container">
        <div class="post-headline">
            <h3>Posts</h3>
        </div>
        <AllPosts/>
    </div>
</template >

<script>
import AllPosts from '../views/AllPosts'
export default {
    name:"Posts",
    components:{
        AllPosts,
    },
    beforeRouteEnter(to, from ,next){
        const uname = localStorage.getItem('username')
        const pname = localStorage.getItem('password')
        console.log(pname,uname);
        if(uname !== null || pname !== null){
            next()
        }else{
            next('/login')
        }
    }
}
</script>

<style>
.container{
    display: flex;
    flex:1;
    overflow-y: hidden;
}
.post-headline h3{
    padding-left:10vh;
    padding-top: 5vh;
    font-family: "Montserrat",sans-serif;
}
</style>