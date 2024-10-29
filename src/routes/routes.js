import { createRouter, createWebHistory } from 'vue-router';
// import {validateToken, logout} from '../helpers/auth.js';

// import AdmDashboard from '../views/AdmViews/AdmDashboard.vue';
// import AdmMakeMedia from '../views/AdmViews/AdmMakeMedia.vue';
// import AdmMediaContent from '../views/AdmViews/AdmMediaContent.vue';
// import AdmMakeFilters from '../views/AdmViews/AdmMakeFilters.vue';
// import LoginUser from '../views/LoginUser.vue';
// import AccountUser from '../views/AccountUser.vue';
// import UserPage from '../views/UserPage.vue';
// import DeleteUser from '../views/DeleteUser.vue';
// import PlayerContent from '../views/PlayerContent.vue';
// import ChangePassword from '../views/ChangePassword.vue';          
// import UpdateEmail from '../views/UpdateEmail.vue';          
// import ChangeUser from '../views/ChangeUser.vue';          
// import UpdateHouse from '../views/UpdateHouse.vue';   

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue') 
  },
//   {
//     path: '/movies/:id',
//     name: 'Movie',
//     component: () => import('../views/MovieTitle.vue') 
//   },
//   {
//     path: '/loginadm',
//     name: 'login Adm',
//     component: () => import('../views/AdmViews/LoginAdm.vue')
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/LoginUser.vue') 
//   },
//   {
//     path: '/useraccounts',
//     name: 'Perfil',
//     component: () => import('../views/AccountUser.vue')
//   },
//   {
//     path: '/AdmDashboard',
//     name: 'Dashboard',
//     component: () => import('../views/AdmViews/AdmDashboard.vue'),
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/MakeMedia',
//     name: 'make movie',
//     component: () => import('../views/AdmViews/AdmMakeMedia.vue'),
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/EditMedia',
//     name: 'Edit',
//     component: () => import('../views/AdmViews/AdmMediaContent.vue'),
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/Filters',
//     name: 'Filters',
//     component: () => import('../views/AdmViews/AdmMakeFilters.vue'),
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/User',
//     name: 'User Page',
//     component: () => import('../views/UserPage.vue') 
//   },
//   {
//     path: '/DeleteUser',
//     name: 'Delete Account',
//     component: () => import('../views/DeleteUser.vue') 
//   },
//   {
//     path: '/MudarSenha',
//     name: 'MudarSenha',
//     component: () => import('../views/ChangePassword.vue')
//   },
//   {
//     path: '/AtualizarEmail',
//     name: 'Atualizar Email',
//     component: () => import('../views/UpdateEmail.vue')
//   },
//   {
//     path: '/AtualizarNome',
//     name: 'Atualizar Nome',
//     component: () => import('../views/ChangeUser.vue')
//   },
//   {
//     path: '/AtualizarCasa',
//     name: 'Atualizar Casa',
//     component: () => import('../views/UpdateHouse.vue')
//   },
//   {
//     path: '/Player',
//     name: 'Player',
//     component: () => import('../views/PlayerContent.vue')
//   },
//   {
//     path: '/play/movies/:id/season/:seasonId/episode/:episodeId',
//     name: 'PlayEpisode',
//     component: () => import('../views/MovieView.vue'),
//     props: route => ({
//       movieId: route.params.movieId,
//       seasonId: route.params.seasonId,
//       episodeId: route.params.episodeId
//     })
//   },
//   {
//     path: '/play/movies/:id',  
//     name: 'PlayMovie',
//     component: () => import('../views/MovieView.vue')
//   },
//   {
//     path: '/logout',
//     name: 'logout',
//     component: () => import('../views/AdmViews/LoginAdm.vue'),
//     beforeEnter: (to, from, next) => {
//       logout();
//       next({ name: 'login' });
//     }
//   }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// // Navigation guard para proteger rotas
// router.beforeEach(async (to, from, next) => {
//   // Se a rota requer autenticação
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     const isAuthenticated = await validateToken(); // Valida o token com o servidor

//     if (!isAuthenticated) {
//       next({ name: 'login' }); // Redireciona para o login se não estiver autenticado
//     } else {
//       next(); // Permite o acesso se o token for válido
//     }
//   } else {
//     next(); // Permite o acesso se a rota não exigir autenticação
//   }
// });


export default router;
