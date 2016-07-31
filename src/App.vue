<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <a class="title" v-link="{path : '/'}">Tiny</a>
        <button v-if="$route.path!=='/new-post'" class="btn btn-primary pull-right" v-link="{path : '/new-post'}">Add new</button>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  max-width: 960px;
}
.title{
  font-weight: bold;
  font-size: 35px;
}
  button{
    margin-top: 10px;
  }
</style>