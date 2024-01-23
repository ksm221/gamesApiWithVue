<template>
    <div>
      <h1 class="title">Delete Order</h1>
  
      <div class="order-details">
        <div v-if="orderId !== null">Order ID: {{ orderId }}</div>
        <div v-if="paymentReceived !== null && paymentReceived !== undefined">Payment Received: {{ paymentReceived }}</div>
        <div v-if="orderReceived !== null && orderReceived !== undefined">Order Received: {{ orderReceived }}</div>
        <div v-if="userId !== null && userId !== undefined">User ID: {{ userId }}</div>
        <div v-if="gamesId !== null && gamesId !== undefined">Games ID: {{ gamesId }}</div>
      </div>
  
      <form @submit.prevent="deleteOrder" class="delete-form">
        <button type="submit" class="delete-button">Delete Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orderId: null,
        paymentReceived: null,
        orderReceived: null,
        userId: null,
        gamesId: null,
      };
    },
    methods: {
      async deleteOrder() {
        try {
          const orderId = this.$route.params.orderId;
          await axios.delete(`http://localhost:8080/orders/${orderId}`);
          this.$router.push('/orders');
          window.location.reload();
        } catch (error) {
          console.error('Error deleting order:', error);
        }
      },
      async fetchOrderDetails(orderId) {
        try {
          const response = await axios.get(`http://localhost:8080/orders/${orderId}`);
          const order = response.data;
  
          console.log('Fetched order details:', order);
  
          this.orderId = order.orderId;
          this.paymentReceived = order.paymentReceived;
          this.orderReceived = order.orderReceived;
          this.userId = order.userId;
          this.gamesId = order.gamesId;
        } catch (error) {
          console.error('Error fetching order details:', error);
        }
      },
    },
    created() {
      const orderId = this.$route.params.orderId;
      this.fetchOrderDetails(orderId);
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .order-details {
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
  