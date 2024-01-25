<!-- <template>
  <div>
    <h1 class="title">Games List</h1>
    <router-link :to="{ name: 'games-add' }">Add Game</router-link>
    <ul class="games-list">
      <router-link
        v-for="game in games"
        :key="game.id"
        :to="{ name: 'games-edit', params: { id: game.id } }"
      >
        <li class="game-item">
          <h2 v-if="game.name">{{ game.name }}</h2>
          <div v-for="(value, key) in game" :key="key" class="game-detail">
            <span v-if="value !== null && key !== 'id' && key !== 'name'">
              {{ key }}: {{ value }}
            </span>
          </div>
          <router-link :to="{ name: 'games-edit', params: { id: game.id } }">Edit</router-link>
          <router-link :to="{ name: 'games-delete', params: { id: game.id } }">Delete</router-link>
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
      games: [],
    };
  },
  mounted() {
    this.fetchGames();
  },
  methods: {
    async fetchGames() {
      try {
        const response = await axios.get('http://localhost:8080/games');
        this.games = response.data;
      } catch (error) {
        console.error('Error fetching games:', error);
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

.games-list {
  list-style-type: none;
  padding: 0;
}

.game-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.game-detail {
  margin-bottom: 5px;
}

.edit-link {
  color: #007BFF;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  cursor: pointer;
}

.edit-link:hover {
  text-decoration: underline;
}
</style> -->
