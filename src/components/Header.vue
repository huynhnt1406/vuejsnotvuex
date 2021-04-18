<template>
  <div class="header">
      <div class="header-left">
          <h3>Vue Project</h3>
      </div>
      <div class="header-right">
          <h3>Hello {{useraccount}}</h3>
          <router-link class="link" to="/login">Login</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            useraccount: JSON.parse(localStorage.getItem("username")),
        }
    },
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
.header-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-right h3{
    padding: 5px;
    font-weight: 300;
    background-color: black;
    color:white;
}
.header-right .link{
    padding: 6.5px;
    font-weight: 300;
    background-color: black;
    color:white; 
    text-decoration: none;
    margin-left:10px
}
</style>