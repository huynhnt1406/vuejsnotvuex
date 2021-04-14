<template>
    <div class="search-tools">
        <input @keyup.enter="filterUserById" type="text" placeholder="Search User (ID)">
        <button type="submit" >Search</button>
    </div>
</template>

<script>
export default {
    name:"UserSearch",
    methods:{
        filterUserById(e){
            this.$emit('filterUser',e)
        }
    }
}
</script>

<style scope>
.search-tools{
    padding:5vh 10vh 5vh 10vh;
}
.search-tools input{
    height: 30px;
    width: 200px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 2px solid black;
    transition:0.3s ease-in-out;
    outline: none;
    background-color: transparent;
}
.search-tools input:focus{
    border-bottom: 2px solid forestgreen;
}
</style>