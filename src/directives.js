import Vue from "vue";

// Make Format Custom Directive
Vue.directive("format", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
    console.log(binding);

    // Bold Modifier
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }

    // Orange Modifier
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  },
});
