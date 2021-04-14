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
}
</script>

<style scope>
.container{
    display: flex;
    flex:1;
    overflow-y: hidden;
}
</style>