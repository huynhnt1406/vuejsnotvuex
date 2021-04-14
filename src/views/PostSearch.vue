<template>
    <div class="search-tools">
        <input @keyup.enter="filterPost"   type="text" placeholder="Search Post (ID)">
        <button>Search</button>
    </div>
</template>

<script>
export default {
    name:"PostSearch",
    methods:{
        filterPost(e){
            this.$emit('searchPost', e)
        }
    }
}
</script>

<style scope>
.search-tools{
    padding:5vh 10vh 5vh 10vh;
    display: flex;
    align-items: center;
}
.search-tools input{
    height: 30px;
    width: 200px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 2px solid black;
    transition:0.3s ease-in-out;
    outline:none;
    background-color: transparent;
}
.search-tools input:focus{
    border-bottom: 2px solid forestgreen;
}
.search-tools button{
    height: 34px;
    margin-left: 5vh;
}
</style>