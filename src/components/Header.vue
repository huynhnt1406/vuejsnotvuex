<template>
  <div class="header">
      <div class="header-left">
          <h3>Vue Project</h3>
      </div>
      <div class="header-right">
          <router-link to="/login">Login</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    padding:15px;
    background-color: gray;
    align-items: center;
    font-family: "Poppins",sans-serif;
}
.header-left h3{
    color:white;
    font-weight: 400;
}
.header-right button{
    padding:5px;
    
}
</style>