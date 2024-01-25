<!-- <template>
    <div>
      <h1 class="title">Add Game</h1>
      
      <form @submit.prevent="addGame" class="add-form">
        <label for="name">Name:</label>
        <input type="text" v-model="newGame.name" required />
  
        <label for="price">Price:</label>
        <input type="number" v-model="newGame.price" required />
  
        <label for="os">OS:</label>
        <input type="text" v-model="newGame.os" required />
  
        <label for="genre">Genre:</label>
        <input type="text" v-model="newGame.genre" required />
  
        <label for="matureContent">Mature Content:</label>
        <input type="checkbox" v-model="newGame.matureContent" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="add-button">Add Game</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newGame: {
          name: '',
          price: 0,
          os: '',
          genre: '',
          matureContent: false,
        },
      };
    },
    methods: {
      async addGame() {
        try {
          await axios.post('http://localhost:8080/games', this.newGame);
          this.$router.push('/games');
          window.location.reload();
        } catch (error) {
          console.error('Error adding game:', error);
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
   -->