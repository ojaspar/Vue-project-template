import Vue from 'Vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [],
  mode: 'history',
  scrollBehavior(to) {
    if (to.name) return { x: 0, y: 0 };
  }
});
