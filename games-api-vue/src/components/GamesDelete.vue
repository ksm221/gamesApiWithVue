<template>
  <div>
    <h1 class="title">Delete Game</h1>

    <div class="game-details">
      <div v-if="id !== null">Game ID: {{ id }}</div>
      <div v-if="name !== null && name !== undefined">Name: {{ name }}</div>
      <div v-if="price !== null && price !== undefined">VIP Level: {{ price }}</div>
      <div v-if="os !== null && os !== undefined">os: {{ os }}</div>
	  <div v-if="genre !== null && genre !== undefined">genre: {{ genre }}</div>
	  <div v-if="matureContent !== null && matureContent !== undefined">Mature content: {{ matureContent }}</div>
    </div>

    <form @submit.prevent="deleteGame" class="delete-form">
      <button type="submit" class="delete-button">Delete Game</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: null,
      name: null,
      price: null,
      os: null,
      genre: null,
	    matureContent: null,
    };
  },
  methods: {
    async deleteGame() {
      try {
        const id = this.$route.params.id;
        await axios.delete(`http://localhost:8080/games/${id}`);
        this.$router.push('/games');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting game:', error);
      }
    },
    async fetchgameDetails(id) {
      try {
        const response = await axios.get(`http://localhost:8080/games/${id}`);
        const game = response.data;

        console.log('Fetched game details:', game);

        this.id = game.id;
        this.name = game.name;
        this.price = game.price;
        this.os = game.os;
        this.genre = game.genre;
		this.matureContent = game.matureContent;
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    },
  },
  created() {
    const id = this.$route.params.id;
    this.fetchgameDetails(id);
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
  bgame: none;
  bgame-radius: 5px;
}

.delete-button:hover {
  background-color: #e60000;
}
</style>
