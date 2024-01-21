import { createRouter, createWebHistory } from 'vue-router';
import GamesList from '../src/components/GamesList.vue';
import GamesAdd from '../src/components/GamesAdd.vue';
import GamesEdit from '../src/components/GamesEdit.vue';
import GamesDelete from '../src/components/GamesDelete.vue';
import UsersList from '../src/components/UsersList.vue';
import UsersAdd from '../src/components/UsersAdd.vue';
import UsersEdit from '../src/components/UsersEdit.vue';
import UsersDelete from '../src/components/UsersDelete.vue';

const routes = [
  {
    path: '/games',
    component: { template: '<router-view />' },
    children: [
      { path: '', component: GamesList, name: 'games-list' },
      { path: 'add', component: GamesAdd, name: 'games-add' },
      { path: ':id/edit', component: GamesEdit, name: 'games-edit' },
      { path: ':id/delete', component: GamesDelete, name: 'games-delete' },
    ],
  },
  {
    path: '/users',
    component: { template: '<router-view />' },
    children: [
      { path: '', component: UsersList, name: 'users-list' },
      { path: 'add', component: UsersAdd, name: 'users-add' },
      { path: ':userId/edit', component: UsersEdit, name: 'users-edit' },
      { path: ':userId/delete', component: UsersDelete, name: 'users-delete' },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;