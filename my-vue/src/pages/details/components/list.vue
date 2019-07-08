<template>
  <div class="content">
    <ul v-for="(item,index) in categoryList" :key="index">
      <li class="li">
        <i class="iconfont">&#xe618;</i>
        {{item.title}}
      </li>

      <li v-if="item.children" class="chidler">
        <List :categoryList="item.children"></List>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "List",
    props: {
      categoryList: Array
    },
    data() {
      return {};
    }
  };
</script>
<style scoped>
  .li {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
    padding-left: 0.2rem;
  }
  .iconfont {
    margin-right: 0.1rem;
  }
  .chidler{
    padding-left: .2rem;
  }
</style>

