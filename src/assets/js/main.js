/*============================Menu Table===================
- 1, init
- 2, test html object
*/
/* ============================= 1, init  ============================= */

$(document).ready(function () {
  navigation.init();
  
});

/* ============================= 2, Test  ============================= */
const navigation = {
  init: function () {
      this.scrollScreen();
  },
  scrollScreen: function () {
      window.addEventListener(
          "scroll",
          function () {
              console.log("test123");
          },
          false
      );
  }
};