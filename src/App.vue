<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center title">Tiny</h1>
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
}
</style>