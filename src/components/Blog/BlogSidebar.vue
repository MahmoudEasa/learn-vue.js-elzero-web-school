<template>
  <div class="sidebar-widgets">{{ title | uppercase }} Blog Sidebar</div>
</template>

<script>
export default {
  name: "BlogSidebar",
  data: function () {
    return {
      title: "Testing",
    };
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase();
    },
  },
};
</script>
