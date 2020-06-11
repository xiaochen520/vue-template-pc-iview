<template>
  <div id="app">
    <keep-alive v-if="$route.meta.alive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<style lang="less">
@import "./style/reset.css";
#app {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
