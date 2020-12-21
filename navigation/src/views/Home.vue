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
      </div>
    </nav>
    <div class="container">
      <div class="search_box">
        <div class="search_list">
          <ul>
            <li v-for="(item, index) in search_type" :key="index">
              <i class="iconfont"></i> {{ item }}
            </li>
          </ul>
        </div>
        <div class="search_form">
          <input type="text" class="ipt" />
          <button class="btn"><i class="el-icon-search"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search_type: ["Google", "Github", "Baidu", "CSDN"],
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

