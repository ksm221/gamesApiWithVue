<!-- <template>
    <div>
      <h1 class="title">Add Order</h1>
        
      <form @submit.prevent="addOrder" class="add-form">
        <label for="userId">User ID:</label>
        <input type="number" v-model="newOrder.userId" />
    
        <label for="gamesId">Games ID:</label>
        <input type="number" v-model="newOrder.gamesId" />

        <label for="paymentReceived">Payment Received:</label>
        <input type="checkbox" v-model="newOrder.paymentReceived" />
    
        <label for="orderReceived">Order Received:</label>
        <input type="checkbox" v-model="newOrder.orderReceived" />
    
        <div class="form-spacing"></div>
    
        <button type="submit" class="add-button">Add Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newOrder: {
          paymentReceived: false,
          orderReceived: false,
          userId: null,
          gamesId: null,
        },
      };
    },
    methods: {
      async addOrder() {
        try {
          await axios.post('http://localhost:8080/orders', this.newOrder);
          this.$router.push('/orders');
          window.location.reload();
        } catch (error) {
          console.error('Error adding order:', error);
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