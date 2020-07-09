// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import InfoBlog from './infoBlog.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

/* eslint-disable no-new */
new Vue({
  el: '#blogInfo',
  components: { InfoBlog },
  template: '<InfoBlog/>'
})