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
      path: '/job-offers/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X',
      name: 'job-offers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JobOfferView.vue')
    },
    {
      path: '/new-employee-form/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X',
      name: 'new-employee-form',
      component: () => import('../views/CandidateFormView.vue')
    }
  ]
})

export default router
