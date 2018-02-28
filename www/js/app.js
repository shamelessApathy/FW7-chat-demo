(function() {

var states = {};

function init (){

  // Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init Page Components
Vue.component('page-chat', {
  template: '#page-chat',
  data: function () {
    return states;
  },
  methods: {
    onSend: function(text){
      if (text.trim().length === 0) return;
      //TODO
      if (typeof clear == 'function') clear();
    }
  }
});

  // Init App
new Vue({
  el: '#app',
  data: function(){
    return states;
  },
  methods: {
    enterChat : function(){
      // TODO
    }
  },
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: [
      {
        path: '/chat/',
        component: 'page-chat'
      },
    ],
  }
});
}


// Handle device ready event
// Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
document.addEventListener('deviceready', init , false)



})();

