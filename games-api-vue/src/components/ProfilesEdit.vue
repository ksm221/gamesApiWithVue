<!-- <template>
    <div>
      <h1 class="title">Edit Profile</h1>
  
      <form @submit.prevent="updateProfile" class="edit-form">
        <div v-if="profileId">Profile ID: {{ profileId }}</div>
  
        <label for="userId">User ID:</label>
        <input type="number" v-model="editedProfile.userId" />
  
        <label for="description">Description:</label>
        <textarea v-model="editedProfile.description"></textarea>
  
        <label for="vipLevel">VIP Level:</label>
        <input type="number" v-model="editedProfile.vipLevel" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="update-button">Update Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        profileId: null,
        editedProfile: {
          description: '',
          vipLevel: null,
          userId: null,
        },
      };
    },
    watch: {
      '$route.params.profileId': {
        handler: 'fetchProfileDetails',
        immediate: true,
      },
    },
    methods: {
      async fetchProfileDetails() {
        try {
          if (this.$route && this.$route.params) {
            const profileId = this.$route.params.profileId;
            console.log('Fetching profile details for ID:', profileId);
            const response = await axios.get(`http://localhost:8080/profiles/${profileId}`);
            console.log('Response data:', response.data);
  
            if (
              response.data &&
              typeof response.data === 'object' &&
              'description' in response.data &&
              'vipLevel' in response.data &&
              'userId' in response.data
            ) {
              this.editedProfile = {
                userId: response.data.userId != null ? parseInt(response.data.userId) : null,
                vipLevel: response.data.vipLevel != null ? parseInt(response.data.vipLevel) : null,
                description: response.data.description || '',
              };
  
              this.profileId = profileId;
            } else {
              console.error('Invalid response data format:', response.data);
            }
          } else {
            console.error('Route params are undefined.');
          }
        } catch (error) {
          console.error('Error fetching profile details:', error);
        }
      },
  
      async updateProfile() {
        try {
          const profileId = this.$route.params.profileId;
          await axios.put(`http://localhost:8080/profiles/${profileId}`, this.editedProfile);
          // Redirect after successful update
          this.$router.push('/profiles');
        } catch (error) {
          console.error('Error updating profile:', error);
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