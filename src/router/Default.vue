<template>
  <div class="content">
    <div class="nav">
      <router-link class="link" to="/dashboard">软件开发云</router-link>
      <router-link class="link" to="/project">项目管理</router-link>
      <router-link class="link" to="/codehub">代码托管</router-link>
      <router-link class="link" to="/build">编译构建</router-link>
      <router-link class="link" to="/codeCheck">代码检查</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {};
  },
  created() {
    this.requestData();
  },
  methods: {
    requestData() {
      this.$axios
        .get('/api/articles')
        .then(e => {
          let data = e.data;
          if (data.data && Array.isArray(data.data)) {
            this.articles = data.data;
          }
          console.log(this.articles);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
.nav {
  flex-basis: auto;
}
.link {
  padding: 5px 20px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  background-color: #ffeaa7;
  color: #6c5ce7;
  text-decoration: none;
}

.main {
  flex-grow: 1;
}
</style>
