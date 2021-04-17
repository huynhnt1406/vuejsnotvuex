<template>
  <div class="container">
        <div class="user-headline">
            <h3>Users</h3>
        </div>
      <AllUsers />
  </div>
</template>

<script>

import AllUsers from './AllUsers'
export default {
    name:"Users",
    components:{
        AllUsers,
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

<style scope>
.container{
    display: flex;
    flex:1;
    overflow-y: hidden;
}
</style>