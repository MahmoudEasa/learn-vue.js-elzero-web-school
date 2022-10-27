<template>
  <div class="header">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <router-link to="/" tag="li" exact>
          <a>Elzero Vue</a>
        </router-link>
      </div>
      <ul>
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/help" tag="li" replace>
          <a>Help</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
$mainColor: #42b983;
.header {
  background-color: #333;
  color: #fff;
  padding: 15px 0;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 99999;
  margin-bottom: 30px !important;

  .logo {
    font-size: 24px;

    a {
      color: inherit;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    li {
      &.router-link-exact-active {
        color: $mainColor;
      }

      :hover {
        color: $mainColor;
      }

      a {
        font-weight: inherit;
        color: inherit;
      }
    }
  }
}
</style>
