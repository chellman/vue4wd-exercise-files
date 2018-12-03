(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      message: "Product customizer will go here",
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors,
      selectedColor: 'red'
    },
    methods: {
      updateColorsBySize: function(evt) {
        console.log('called updateColorsBySize', evt.target.value);

        this.colors = window.Inventory.bySize[evt.target.value];
      },
      updateSizesByColor: function(evt) {
        console.log('called updateSizesByColor', evt.target.value);

        this.sizes = window.Inventory.byColor[evt.target.value];
      }
    }
  });
})();
