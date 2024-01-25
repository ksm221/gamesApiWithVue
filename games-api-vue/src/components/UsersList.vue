<template>
  <div>
    <h1 class="title">Users List</h1>
    <router-link :to="{ name: 'users-add' }">Add User</router-link>
    <ul class="users-list">
      <router-link v-for="user in users" :key="user.userId" :to="{ name: 'users-edit', params: { userId: user.userId } }">
        <li class="user-item" :key="user.userId">
          <h2 v-if="user.userName">{{ user.userName }}</h2>
          <div v-for="(value, key) in user" :key="key" class="user-detail">
            <span v-if="value !== null && key !== 'userId' && key !== 'userName'">
              {{ key }}: {{ value }}
            </span>
          </div>
          <router-link :to="{ name: 'users-edit', params: { userId: user.userId } }">Edit</router-link>
          <router-link :to="{ name: 'users-delete', params: { userId: user.userId } }">Delete</router-link>
        </li>
      </router-link>
    </ul>
    
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],  
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:8080/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .users-list {
    list-style-type: none;
    padding: 0;
  }
  
  .user-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .user-detail {
    margin-bottom: 5px;
  }
  
  .edit-link {
    color: #007BFF;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
  </style>
  