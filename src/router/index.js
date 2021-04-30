import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: () => import("../pages/Index.vue"),
    children: [
      {
        path: '/',
        redirect: "/home"
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
      }
      ,
      {
        path: '/me',
        name: 'Me',
        component: () => import('../pages/Me.vue')
      }
      ,
      {
        path: '/order',
        name: 'Order',
        component: () => import('../pages/Order.vue')
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../pages/News.vue')
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('../pages/Address.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const ele_login = localStorage.ele_login ? true : false;
  if (to.path == "/login") {
    ele_login ? next('/') : next();

  } else {
    ele_login ? next() : next('/login');
  }

})



export default router
