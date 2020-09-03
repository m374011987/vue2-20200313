import Vue from 'vue';
import Router from 'vue-router';
import Default from './Default.vue';
import Fullscreen from './Fullscreen.vue';
import Dashboard from '../pages/Dashboard.vue';
import Project from '../pages/project.vue';
import Codehub from '../pages/codehub.vue';
import Build from '../pages/build.vue';
import CodeCheck from '../pages/codeCheck.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'project',
          component: Project,
        },
        {
          path: 'codehub',
          component: Codehub,
        },
        {
          path: 'build',
          component: Build,
        },
        {
          path: 'codeCheck',
          component: CodeCheck,
        },
        {
          path: '*',
          redirect: 'dashboard',
        },
      ],
    },
    {
      path: '/fullscreen',
      component: Fullscreen,
    },
  ],
});
