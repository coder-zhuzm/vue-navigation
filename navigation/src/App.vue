<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608202312022&di=c5c591b24c53ed3a3423949a862b6d13&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg",
    };
  },
};
</script>

<style>
@import "./assets/static/css/reset.css"; /* 外部引入css */
html {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("https://p.pstatp.com/origin/13749000299387099ca18");
}
#app {
  width: 100%;
  height: 100%;
}
</style>