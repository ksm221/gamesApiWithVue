<!-- <template>
    <div>
      <h1 class="title">Delete Profile</h1>
  
      <div class="profile-details">
        <div v-if="profileId !== null">Profile ID: {{ profileId }}</div>
        <div v-if="userId !== null && userId !== undefined">User ID: {{ userId }}</div>
        <div v-if="vipLevel !== null && vipLevel !== undefined">VIP Level: {{ vipLevel }}</div>
        <div v-if="description !== null && description !== undefined">Description: {{ description }}</div>
      </div>
  
      <form @submit.prevent="deleteProfile" class="delete-form">
        <button type="submit" class="delete-button">Delete Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        profileId: null,
        userId: null,
        vipLevel: null,
        description: null,
      };
    },
    methods: {
      async deleteProfile() {
        try {
          const profileId = this.$route.params.profileId;
          await axios.delete(`http://localhost:8080/profiles/${profileId}`);

          this.$router.push('/profiles');
        } catch (error) {
          console.error('Error deleting profile:', error);

        }
      },
      async fetchProfileDetails() {
        try {
          const profileId = this.$route.params.profileId;
          const response = await axios.get(`http://localhost:8080/profiles/${profileId}`);
          const profile = response.data;
  
          console.log('Fetched profile details:', profile);
  
          this.profileId = profile.profileId;
          this.userId = profile.userId;
          this.vipLevel = profile.vipLevel;
          this.description = profile.description;
        } catch (error) {
          console.error('Error fetching profile details:', error);

          this.$router.push('/profiles');
        }
      },
    },
    created() {
      this.fetchProfileDetails();
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .profile-details {
    margin-bottom: 20px;
  }
  
  .delete-form {
    margin-top: 15px;
  }
  
  .delete-button {
    background-color: #ff3333;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  </style>
   -->