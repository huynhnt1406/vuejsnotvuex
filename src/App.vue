<template>
  <div class="container">
    <Header/>
    <div class="main">
        <Sidebar/>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
export default {
  components:{
    Header,
    Sidebar,
  },
}
</script>

<style>
*{
  margin:0;
}
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f3;
}
.main{
  display: flex;
  flex:1;
}
</style>