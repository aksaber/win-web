// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BlogInfo from './blogInfo.vue'

/* eslint-disable no-new */
new Vue({
  el: '#blogInfo',
  components: { BlogInfo },
  template: '<BlogInfo/>'
})