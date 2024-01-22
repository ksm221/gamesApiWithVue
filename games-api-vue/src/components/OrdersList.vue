<template>
    <div>
      <h1 class="title">Orders List</h1>
      <ul class="orders-list">
        <li class="order-item" v-for="order in orders" :key="order.orderId">
          <h2 v-if="order.orderId">Order ID: {{ order.orderId }}</h2>
          <div v-if="order.paymentReceived !== null" class="order-detail">
            <span>Payment Received: {{ order.paymentReceived }}</span>
          </div>
          <div v-if="order.orderReceived !== null" class="order-detail">
            <span>Order Received: {{ order.orderReceived }}</span>
          </div>
          <div v-if="order.userId !== null" class="order-detail">
            <span>User ID: {{ order.userId }}</span>
          </div>
          <div v-if="order.gamesId !== null" class="order-detail">
            <span>Games ID: {{ order.gamesId }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: [],
      };
    },
    mounted() {
      this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        try {
          const response = await axios.get('http://localhost:8080/orders');
          this.orders = response.data;
        } catch (error) {
          console.error('Error fetching orders:', error);
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
  
  .orders-list {
    list-style-type: none;
    padding: 0;
  }
  
  .order-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .order-detail {
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
  