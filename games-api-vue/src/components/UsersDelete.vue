<template>
  <div>
    <h1 class="title">Delete User</h1>

    <div class="user-details">
      <div v-if="userId !== null">User ID: {{ userId }}</div>
      <div v-if="userName !== null && userName !== undefined">Username: {{ userName }}</div>
      <div v-if="userPassword !== null && userPassword !== undefined">VIP Level: {{ userPassword }}</div>
      <div v-if="userEmail !== null && userEmail !== undefined">userEmail: {{ userEmail }}</div>
  <div v-if="user2FA !== null && user2FA !== undefined">user2FA: {{ user2FA }}</div>
    </div>

    <form @submit.prevent="deleteUser" class="delete-form">
      <button type="submit" class="delete-button">Delete User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userId: null,
      userName: null,
      userPassword: null,
      userEmail: null,
      user2FA: null,
    };
  },
  methods: {
    async deleteuser() {
      try {
        const userId = this.$route.params.userId;
        await axios.delete(`http://localhost:8080/users/${userId}`);
        this.$router.push('/users');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async fetchuserDetails(userId) {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userId}`);
        const user = response.data;

        console.log('Fetched user details:', user);

        this.userId = user.userId;
        this.userName = user.userName;
        this.userPassword = user.userPassword;
        this.userEmail = user.userEmail;
        this.user2FA = user.user2FA;
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    },
  },
  created() {
    const userId = this.$route.params.userId;
    this.fetchuserDetails(userId);
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
  buser: none;
  buser-radius: 5px;
}

.delete-button:hover {
  background-color: #e60000;
}
</style>
