<template>
    <div>
      <h1 class="title">Add Profile</h1>
  
      <form @submit.prevent="addProfile" class="add-form">
        <label for="description">Description:</label>
        <textarea v-model="newProfile.description"></textarea>
  
        <label for="vipLevel">VIP Level:</label>
        <input type="number" v-model="newProfile.vipLevel" />
  
        <label for="userId">User ID:</label>
        <input type="number" v-model="newProfile.userId" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="add-button">Add Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newProfile: {
          description: '',
          vipLevel: null,
          userId: null,
        },
      };
    },
    methods: {
      async addProfile() {
        try {
          await axios.post('http://localhost:8080/profiles', this.newProfile);
          // Redirect after successful addition
          this.$router.push('/profiles');
        } catch (error) {
          console.error('Error adding profile:', error);
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
  