<template>
    <div>
      <button @click="deleteUser" class="delete-button">Delete User</button>
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
    mounted() {
      this.fetchUserDetails();
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
      async deleteUser() {
        try {
          const userId = this.$route.params.userId;
          await axios.delete(`http://localhost:8080/users/${userId}`);
          this.$router.push('/users');
        } catch (error) {
          console.error('Error deleting user:', error);
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
  
  .confirmation-message {
    margin-bottom: 20px;
  }
  
  .delete-button {
    background-color: #ff4d4d;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  
  .delete-button:hover {
    background-color: #e60000;
  }
  </style>
  