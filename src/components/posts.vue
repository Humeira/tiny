<template>
    <div>
        <article v-for="post in posts.all" class="well">
            <h2><a v-link="{ name: 'post', params: { id: post.id }}">{{post.title}}</a></h2>
            <p>{{post.author}} {{post.date}}</p>
            <img v-bind:src="post.avatar" alt="{{post.author}}" class="pull-right">
            <p>{{post.content}}</p>

        </article>
    </div>
</template>
<script>
    var myPosts = {all: []}

    export default{
        data(){
            return {
                posts: myPosts
            }
        },
        ready: function () {
            /**
             * Getting data
             */
            $.get('api/posts', function (data) {
                myPosts.all = data;
            })
        }
    }
</script>
