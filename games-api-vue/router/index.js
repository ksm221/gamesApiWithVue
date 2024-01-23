import { createRouter, createWebHistory } from 'vue-router';
import GamesList from '../src/components/GamesList.vue';
import GamesAdd from '../src/components/GamesAdd.vue';
import GamesEdit from '../src/components/GamesEdit.vue';
import GamesDelete from '../src/components/GamesDelete.vue';
import UsersList from '../src/components/UsersList.vue';
import UsersAdd from '../src/components/UsersAdd.vue';
import UsersEdit from '../src/components/UsersEdit.vue';
import UsersDelete from '../src/components/UsersDelete.vue';
import OrdersList from '../src/components/OrdersList.vue';
import OrdersAdd from '../src/components/OrdersAdd.vue';
import OrdersEdit from '../src/components/OrdersEdit.vue';
import OrdersDelete from '../src/components/OrdersDelete.vue';

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
  {
    path: '/orders',
    component: { template: '<router-view />' },
    children: [
      { path: '', component: OrdersList, name: 'orders-list' },
      { path: 'add', component: OrdersAdd, name: 'orders-add' },
      { path: ':orderId/edit', component: OrdersEdit, name: 'orders-edit' },
      { path: ':orderId/delete', component: OrdersDelete, name: 'orders-delete' },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
