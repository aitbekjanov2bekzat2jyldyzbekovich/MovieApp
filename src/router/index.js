import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      meta: { auth: true },
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/cartoons',
      name: 'cartoons',
      meta: { auth: true },
      component: () => import('../views/Cartoons.vue')
    },
    {
      path: '/list-of-favorites',
      name: 'favorite',
      meta: { auth: true },
      component: () => import('../views/Favorite.vue')
    },
    {
      path: '/:name/:id',
      name: 'pageShow',
      meta: { auth: true },
      component: () => import('../views/PageShow.vue')
      
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundPage',
      component: () => import('../views/NoteFound.vue')
    },
    {
      path: '/registred',
      name: 'registred',
      component: () => import('../views/Registered.vue'),
      beforeEnter: (to, from, next) => { if (localStorage.token) next({ name: 'home' }); else next() }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: (to, from, next) => { if (localStorage.token) next({ name: 'home' }); else next() }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuth = to.matched.some(record => record.meta.auth)
  if (isAuth && !localStorage.token) {
    next('/login')
  } else {
    next()
  }
})

export default router

