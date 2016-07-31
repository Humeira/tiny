<template>
    <form class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-2 control-label">ID</label>
            <div class="col-sm-8">
                <input class="form-control" v-model="post.id" placeholder="id">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Author</label>
            <div class="col-sm-8">
                <input class="form-control" v-model="post.author" placeholder="Author">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Avatar</label>
            <div class="col-sm-8">
                <input class="form-control" v-model="post.avatar" placeholder="Avatar">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Title</label>
            <div class="col-sm-8">
                <input class="form-control" v-model="post.title" placeholder="Title">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Content</label>
            <div class="col-sm-8">
                <textarea class="form-control" v-model="post.content" placeholder="content"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">Date</label>
            <div class="col-sm-8">
                <input class="form-control" v-model="post.date" placeholder="date">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-2"></div>
            <button class="btn btn-success btn-lg col-md-4" @click="save">ADD</button>
        </div>
    </form>
</template>

<style scoped>
    .btn{
        display: block;
        margin: 0 auto;
        margin-left: 15px;
        width: 64%;
    }
</style>
<script>
    export default{
        data(){
            return{
                post: {
                    id: '',
                    author: '',
                    avatar: '',
                    title: '',
                    content: '',
                    date: ''
                }
            }
        },
        methods: {
            save : function(){
                $.post('api/posts', this.post)
                alert('New Post Added')
            }
        }
    }
</script>

