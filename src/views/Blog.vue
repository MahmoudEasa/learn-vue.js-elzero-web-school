<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :post="post"
              :posts="posts"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import BlogPostsData from "@/json/blog-posts";

export default {
  name: "BlogVue",
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This Is Blog Page",
      posts: BlogPostsData,
    };
  },
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>

<style lang="scss" scoped></style>
