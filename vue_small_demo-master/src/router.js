import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AlbumsOverview from "./views/albums/AlbumsOverview";
import AlbumsCreate from "./views/albums/AlbumsCreate";
import AlbumsUpdate from "./views/albums/AlbumsUpdate";
import ShoesList from "./views/shoes/ShoesList";
import Get from "./views/admin/Get";
import Put from "./views/admin/Put";
import Post from "./views/admin/Post";
import Delete from "./views/admin/Delete";
import About2 from "./views/about2";
import About3 from "./views/about3";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/about3',
          name: 'about3',
          component: About3
      },
      {
          path: '/about2',
          name: 'about2',
          component: About2
      },
    {
      path: '/admin/get',
      name: 'get',
      component: Get
    },
    {
      path: '/admin/post',
      name: 'post',
      component: Post
    },
    {
      path: '/admin/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/admin/put',
      name: 'put',
      component: Put
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/albums-create',
      name: 'albums-create',
      component: AlbumsCreate
    },
    {
      path: '/albums-update/:id',
      name: 'albums-update',
      component: AlbumsUpdate
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsOverview
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: ShoesList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
