import Vue from "vue";

// Make UpperCase
Vue.filter("uppercase", function (value) {
  return value.toUpperCase();
});

// Make Reverse
Vue.filter("reversing", function (v) {
  return v.split("").reverse().join("");
});

// Shorten Text
Vue.filter("shortenText", function (v, len, more) {
  return v.slice(0, len) + ` ${more ? more : "..."}`;
});
