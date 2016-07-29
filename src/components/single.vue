<template>
    <article>
        <h2 class="text-center">{{singlePost.current.title}}</h2>
        <p class="text-center">{{singlePost.current.author}} {{singlePost.current.date}}</p>
        <img class="text-center" v-bind:src="singlePost.current.avatar" alt="{{singlePost.current.author}}">
        <p>{{singlePost.current.content}}</p>
    </article>
</template>
<style scoped>
    img{
        display: block;
        margin: 5px auto;
        border-radius: 50%;
    }
</style>
<script>
    var myPost = {current : [] };
    export default{
        data(){
            return {
                singlePost : myPost
            }



        },
        ready: function(){
            console.log('api/posts/' + this.$route.params.id)
            $.get('api/posts/' + this.$route.params.id, function(data){
                myPost.current = data;
            })
        }
    }
</script>