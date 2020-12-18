<template>
  <div class="home">
    <nav>
      <div class="container">
        <div class="logo">
          <a href="#">
            <img src="../assets/static/images/logo.png" alt="" />
          </a>
        </div>
        <div class="menu">
          <i class="iconfont icon-zhankaicaidan"></i>
          <div class="menuList">
            <a
              :href="item.href"
              target="__blank"
              v-for="(item, index) in topProjectLick"
              :key="index"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <el-button
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px"
        >
          点我打开
        </el-button>

        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
          <span>我来啦!</span>
        </el-drawer>
      </div>
    </nav>
    <div class="search">
      <form method="get" action="http://www.google.com/search" target="_blank">
        <!-- input的中name必须为q，否则提交失败，返回google首页-->
        <input type="text" name="q" size="40" maxlength="255" />
        <!--input type=hidden name=sitesearch value="yongqing.is-programmer.com"-->
        <input type="submit" name="btnG" value="谷歌搜索" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      drawer: false,
      bgImg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608202312022&di=c5c591b24c53ed3a3423949a862b6d13&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg",
      logo: "",
      topProjectLick: [],
    };
  },
  methods: {},
  mounted() {
    this.axios.get("/data/res.json").then((res) => {
      // console.log(res.data);
      res = res.data;
      this.topProjectLick = res.project_link;
    });
  },
};
</script>
<style  scoped>
@import "../assets/static/css/home.css";
@import "../assets/static/font/iconfont.css";
</style>

