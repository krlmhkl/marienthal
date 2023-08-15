import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'email',
      component: () => import('../views/EmailView.vue')
    },
    {
      path: '/job-offers/{jobOfferSecretAccessToken}',
      name: 'job-offers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JobOfferView.vue')
    },
    {
      path: '/new-employee-form/{jobOfferSecretAccessToken}',
      name: 'new-employee-form',
      component: () => import('../components/CandidateForm.vue')
    }
  ]
})

export default router
