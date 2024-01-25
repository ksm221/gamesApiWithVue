<!-- <template>
    <div>
      <h1 class="title">Edit Game</h1>
      
      <form @submit.prevent="updateGame" class="edit-form">
        <label for="name">Name:</label>
        <input type="text" v-model="editedGame.name" required />
  
        <label for="price">Price:</label>
        <input type="number" v-model="editedGame.price" required />
  
        <label for="os">OS:</label>
        <input type="text" v-model="editedGame.os" required />
  
        <label for="genre">Genre:</label>
        <input type="text" v-model="editedGame.genre" required />
  
        <label for="matureContent">Mature Content:</label>
        <input type="checkbox" v-model="editedGame.matureContent" />

        <div class="form-spacing"></div>
  
        <button type="submit" class="update-button">Update Game</button>
      </form>
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
  watch: {
    '$route.params.id': 'fetchGameDetails',
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchGameDetails();
    }
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
    async updateGame() {
      try {
        const gameId = this.$route.params.id;
        await axios.put(`http://localhost:8080/games/${gameId}`, this.editedGame);
        this.$router.push('/games');
        window.location.reload();
      } catch (error) {
        console.error('Error updating game:', error);
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
   -->