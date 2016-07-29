<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <a class="title" v-link="{path : '/'}">Tiny</a>
        <button class="btn btn-primary pull-right">Add</button>
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