<template>
    <div>
      <h1 class="title">Add User</h1>
  
      <form @submit.prevent="addUser" class="add-form">
        <label for="userName">Username:</label>
        <input type="text" v-model="newUser.userName" required />
  
        <label for="userPassword">Password:</label>
        <input type="password" v-model="newUser.userPassword" required />
  
        <label for="userEmail">Email:</label>
        <input type="email" v-model="newUser.userEmail" required />
  
        <label for="user2FA">Enable 2FA:</label>
        <input type="checkbox" v-model="newUser.user2FA" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="add-button">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newUser: {
          userName: '',
          userPassword: '',
          userEmail: '',
          user2FA: false,
        },
      };
    },
    methods: {
      async addUser() {
        try {
          await axios.post('http://localhost:8080/users', this.newUser);
          this.$router.push('/users');
          window.location.reload();
        } catch (error) {
          console.error('Error adding user:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .add-form {
    margin-top: 15px;
  }
  
  .form-spacing {
    height: 20px;
  }
  
  .add-button {
    background-color: #00cc00;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  </style>
  