<template>
    <div>
      <h1 class="title">Edit User</h1>
  
      <form @submit.prevent="updateUser" class="edit-form">
        <label for="userName">Username:</label>
        <input type="text" v-model="editedUser.userName" required />
  
        <label for="userPassword">Password:</label>
        <input type="password" v-model="editedUser.userPassword" required />
  
        <label for="userEmail">Email:</label>
        <input type="email" v-model="editedUser.userEmail" required />
  
        <label for="user2FA">Enable 2FA:</label>
        <input type="checkbox" v-model="editedUser.user2FA" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="update-button">Update User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        editedUser: {
          userId: null,
          userName: '',
          userPassword: '',
          userEmail: '',
          user2FA: false,
        },
      };
    },
    watch: {
      '$route.params.userId': 'fetchUserDetails',
    },
    mounted() {
      if (this.$route.params.userId) {
        this.fetchUserDetails();
      }
    },
    methods: {
      async fetchUserDetails() {
        try {
          if (this.$route && this.$route.params) {
            const userId = this.$route.params.userId;
            const response = await axios.get(`http://localhost:8080/users/${userId}`);
            this.editedUser = response.data;
          } else {
            console.error('Route params are undefined.');
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      },
      async updateUser() {
        try {
          const userId = this.$route.params.userId;
          await axios.put(`http://localhost:8080/users/${userId}`, this.editedUser);
          this.$router.push('/users');
          window.location.reload();
        } catch (error) {
          console.error('Error updating user:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-form {
    margin-top: 15px;
  }
  
  .form-spacing {
    height: 20px;
  }
  
  .update-button {
    background-color: #0055ff;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  </style>
  