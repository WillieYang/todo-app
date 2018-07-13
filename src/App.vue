<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Mirror
        <img src="./assets/logo.png" style="width:20px; height: 20px"> Land
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/hello" type="dark">HelloWorld</b-nav-item>
          <b-nav-item to="/todo">TodoApp</b-nav-item>
          <b-nav-item to="/coins">CrytoCoins</b-nav-item>
          <b-nav-item to="/productList">PlayList</b-nav-item>
          <b-nav-item to="/signUp">Sign Up</b-nav-item>
          <b-nav-item to="/echarts">ECharts</b-nav-item>
          <b-nav-item to="/info">Info</b-nav-item>
          <b-nav-item to="/socketIO">SocketIO</b-nav-item>
          <b-nav-item to="/unitTest">UnitTest</b-nav-item>
          <!--<b-nav-item to="/coins/ethereum">Ethereum</b-nav-item>-->
          <!--<b-nav-item to="/coins/bitcoin">Bitcoin</b-nav-item>-->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button v-on:click="switchLocale" variant="success" size="sm">Language</b-button>
          <el-dropdown>
            <el-button type="primary">
              更换皮肤<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><div @click="setBlack">黑色</div></el-dropdown-item>
              <el-dropdown-item><div @click="setRed">红色</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--<router-link v-bind:to="'/'">HomePage</router-link>-->
    <!--<router-link v-bind:to="'/hello'">HelloWorld</router-link>-->
    <!--<router-link v-bind:to="'/todo'">TodoApp</router-link>-->
    <!--<router-link v-bind:to="'/coins/ethereum'">Ethereum</router-link>-->
    <!--<router-link v-bind:to="'/coins/bitcoin'">Bitcoin</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    themeColour: {
      get() {
        return this.$store.getters.getColour;
      },
      set(val) {
        this.$store.commit('setThemeColour', val);
      },
    },
  },
  watch: {
    themeColour(val) {
      this.toggleClass(document.body, `theme-${val}`);
    },
  },
  mounted() {
    this.toggleClass(document.body, `theme-${this.themeColour}`);
  },
  methods: {
    switchLocale() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'cn';
      } else if (this.$i18n.locale === 'cn') {
        this.$i18n.locale = 'en';
      }
    },
    setBlack() {
      this.themeColour = 'black';
      console.log('Black');
    },
    setRed() {
      this.themeColour = 'black';
      console.log('Red');
    },
    toggleClass(element, className) {
      element.className = className;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
