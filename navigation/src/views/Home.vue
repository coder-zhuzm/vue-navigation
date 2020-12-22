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
    <div class="search_container">
      <div class="search_box">
        <div class="search_form">
          <div class="switch">
            <img
              :src="search_type[0].icon"
              :alt="search_type[0].name"
              @click="showTypeList"
            />
            <div class="typeList" v-show="TypeList">
              <ul>
                <li
                  v-for="(item, index) in search_types"
                  :key="index"
                  @click="changeSearchType(index)"
                >
                  <div class="iconBox">
                    <img :src="item.icon" :alt="item.name" />
                  </div>
                  <div class="content">
                    <span>{{ item.name }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <input type="text" class="ipt" placeholder="请输入搜索内容：" />
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
      TypeList: false, //切换菜单
      search_type: [
        {
          name: "Google",
          icon: "http://upyimg.zhuzm.icu/2020/12/22/bcd25501611a0.png",
        },
      ],
      search_types: [
        {
          name: "Google",
          icon: "http://upyimg.zhuzm.icu/2020/12/22/bcd25501611a0.png",
        },
        {
          name: "Baidu",
          icon: "http://upyimg.zhuzm.icu/2020/12/22/259515da227f4.png",
        },
        {
          name: "Github",
          icon: "http://upyimg.zhuzm.icu/2020/12/22/f5eeed954b652.png",
        },
        {
          name: "CSDN",
          icon: "https://upyimg.zhuzm.icu/2020/12/22/ac43f81262711.png",
        },
      ],
      bgImg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608202312022&di=c5c591b24c53ed3a3423949a862b6d13&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg",
      logo: "",
      topProjectLick: [],
    };
  },
  methods: {
    showTypeList() {
      this.TypeList = !this.TypeList;
    },
    changeSearchType(index) {
      this.search_type[0].name = this.search_types[index].name;
      this.search_type[0].icon = this.search_types[index].icon;
      this.TypeList = false;
    },
    // http://suggestion.baidu.com/su?p=3&wd=git 百度搜索联想 可用节流防抖
  },
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

