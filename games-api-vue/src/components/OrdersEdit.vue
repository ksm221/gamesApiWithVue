<!-- <template>
    <div>
      <h1 class="title">Edit Order</h1>
  
      <form @submit.prevent="updateOrder" class="edit-form">
        <div v-if="orderId">Order ID: {{ orderId }}</div>
  
        <label for="userId">User ID:</label>
        <input type="number" v-model="editedOrder.userId" />
  
        <label for="gamesId">Games ID:</label>
        <input type="number" v-model="editedOrder.gamesId" />
  
        <label for="paymentReceived">Payment Received:</label>
        <input type="checkbox" v-model="editedOrder.paymentReceived" />
  
        <label for="orderReceived">Order Received:</label>
        <input type="checkbox" v-model="editedOrder.orderReceived" />
  
        <div class="form-spacing"></div>
  
        <button type="submit" class="update-button">Update Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orderId: null,
        editedOrder: {
          paymentReceived: false,
          orderReceived: false,
          userId: null,
          gamesId: null,
        },
      };
    },
    watch: {
      '$route.params.id': {
        handler: 'fetchOrderDetails',
        immediate: true,
      },
    },
    mounted() {
      if (this.$route.params.orderId) {
        this.fetchOrderDetails();
      }
    },
    methods: {
        async fetchOrderDetails() {
  try {
    if (this.$route && this.$route.params) {
      const orderId = this.$route.params.orderId;
      const response = await axios.get(`http://localhost:8080/orders/${orderId}`);
      console.log('Response data:', response.data);

      // Check if response.data is an object and has the necessary properties
      if (
        response.data &&
        typeof response.data === 'object' &&
        'paymentReceived' in response.data &&
        'orderReceived' in response.data &&
        'userId' in response.data &&
        'gamesId' in response.data
      ) {
        this.editedOrder = {
          userId: response.data.userId != null ? parseInt(response.data.userId) : null,
          gamesId: response.data.gamesId != null ? parseInt(response.data.gamesId) : null,
          paymentReceived: response.data.paymentReceived || false,
          orderReceived: response.data.orderReceived || false,
        };

        this.orderId = orderId;
      } else {
        console.error('Invalid response data format:', response.data);
      }
    } else {
      console.error('Route params are undefined.');
    }
  } catch (error) {
    console.error('Error fetching order details:', error);
  }
},
  
      async updateOrder() {
        try {
          const orderId = this.$route.params.orderId;
          await axios.put(`http://localhost:8080/orders/${orderId}`, this.editedOrder);
          this.$router.push('/orders');
          window.location.reload();
        } catch (error) {
          console.error('Error updating order:', error);
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