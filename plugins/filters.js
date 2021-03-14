import Vue from 'vue'

Vue.filter('toTimer', timestamp => {
    return new Date(
        timestamp + new Date().getTimezoneOffset() * 60000
      ).toLocaleTimeString()
  })