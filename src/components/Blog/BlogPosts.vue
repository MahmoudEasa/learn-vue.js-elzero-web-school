<template>
  <div>
    <div class="post-box">
      <span class="post-views">{{ post.views }}</span>
      <h3 class="post-title">{{ post.title }}</h3>
      <span v-color.bold="'#42b983'" class="post-date">{{ post.date }}</span>
      <p class="post-content">
        {{ post.content | shortenText(30, "(Reade More)") }}
      </p>
      <div class="row">
        <div class="col-sm-6">
          <span class="post-author">{{ post.author }}</span>
        </div>
        <div class="col-sm-6 text-right">
          <span @click="removeItem(post.id)" class="post-category">{{
            post.category | uppercase | reversing
          }}</span>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  props: ["post", "posts"],
  methods: {
    removeItem: function (i) {
      const postFilter = this.posts.filter((p) => p.id == i);
      console.log(postFilter[0]);
    },
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase();
    },
  },
  directives: {
    color: function (el, binding) {
      el.style.color = binding.value;

      if (binding.modifiers.bold) {
        el.style.fontWeight = "bold";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #42b983;
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .post-views {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: $mainColor;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 0.9em;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #607d88;
    padding: 7px 10px;
    border-radius: 5px;
    color: #fff;
  }
  .post-category {
    background-color: #e91e63;
    padding: 7px 10px;
    border-radius: 5px;
    color: #fff;
  }
}
</style>
