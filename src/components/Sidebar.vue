<template>
  <div class="sidebar">
      <div class="sidebar-header">
            <img src="https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png" alt="mainavt">
            <h3>nthuynh</h3>
      </div>
      <div class="sidebar-link">
            <router-link class="link" to='/users'>Users</router-link>
            <router-link class="link" to='/posts'>Posts</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar{
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: lightgray;
    font-family: "Montserrat",sans-serif;
}
.sidebar-header img{
    height: 40px;
    width: 40px;
}
.sidebar-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}
.sidebar-link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
}
.sidebar-link .link{
    text-decoration: none;
    color:black;
    font-weight: 600;
    padding:2px;
    margin:1.5vh;
    border-bottom: 2px solid transparent;
}
.sidebar-link .link:focus{
    border-bottom: 2px solid forestgreen;
}
</style>