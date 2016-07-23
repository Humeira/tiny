<template>
    <pre>{{$data | json}}</pre>
    <h1>{{$route.params.id}}</h1>
</template>
<script>
    export default{
        data(){
            return{}
        },
        ready : function(){
            console.log( this.$route.params.id);
        }
    }
</script>