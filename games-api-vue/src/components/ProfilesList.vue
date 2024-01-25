<template>
    <div>
      <h1 class="title">Profiles List</h1>
      <!-- <router-link :to="{ name: 'profiles-add' }">Add Profile</router-link> -->
      <ul class="profiles-list">
        <li v-for="profile in profiles" :key="profile.profileId" class="profile-item">
          <router-link :to="{ name: 'profiles-edit', params: { profileId: profile.profileId } }">
            <h2 v-if="profile.profileId">Profile ID: {{ profile.profileId }}</h2>
            <div v-if="profile.description !== null" class="profile-detail">
              <span>Description: {{ profile.description }}</span>
            </div>
            <div v-if="profile.vipLevel !== null" class="profile-detail">
              <span>VIP Level: {{ profile.vipLevel }}</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'profiles-edit', params: { profileId: profile.profileId } }">Edit</router-link>
          <!-- <router-link :to="{ name: 'profiles-delete', params: { profileId: profile.profileId } }">Delete</router-link> -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        profiles: [],
      };
    },
    mounted() {
      this.fetchProfiles();
    },
    methods: {
      async fetchProfiles() {
        try {
          const response = await axios.get('http://localhost:8080/profiles');
          this.profiles = response.data;
        } catch (error) {
          console.error('Error fetching profiles:', error);
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
  
  .profiles-list {
    list-style-type: none;
    padding: 0;
  }
  
  .profile-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .profile-detail {
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
  </style>
  