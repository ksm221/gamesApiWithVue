<template>
    <div>
      <button @click="deleteGame" class="delete-button">Delete Game</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        editedGame: {
          id: null,
          name: '',
          price: 0,
          os: '',
          genre: '',
          matureContent: null,
        },
      };
    },
    mounted() {
      this.fetchGameDetails();
    },
    methods: {
      async fetchGameDetails() {
        try {
          if (this.$route && this.$route.params) {
            const gameId = this.$route.params.id;
            const response = await axios.get(`http://localhost:8080/games/${gameId}`);
            this.editedGame = response.data;
          } else {
            console.error('Route params are undefined.');
          }
        } catch (error) {
          console.error('Error fetching game details:', error);
        }
      },
      async deleteGame() {
        try {
          const gameId = this.$route.params.id;
          await axios.delete(`http://localhost:8080/games/${gameId}`);
          this.$router.push('/games');
        } catch (error) {
          console.error('Error deleting game:', error);
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
  