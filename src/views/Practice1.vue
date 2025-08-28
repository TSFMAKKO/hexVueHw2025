<template>
  <div class="row">
    <!-- 商品列表區 -->
    <ProductView :products="products" @add-cart="addCart" />

    <!-- 購物車區 -->
    <CartView :carts="carts" @remove-cart="removeCart" />

  </div>

  <!-- 通知元件 -->
  <NotificationView />

</template>

<style scoped>
body {
  background: #f2f2f2f2;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
}
</style>

<script setup>
import { ref, provide } from 'vue';
import NotificationView from '../components/NotificationView.vue';
import CartView from '../components/CartView.vue';
import ProductView from '../components/ProductView.vue';


const products = ref([
  {
    id: 1,
    imgURL:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=2065&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '耳罩式藍牙耳機',
    content: '舒適配戴，支援降噪技術',
    price: 2490,
  },
  {
    id: 2,
    imgURL:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '耳罩式彩虹耳機',
    content: '舒適配戴，支援降噪技術',
    price: 1380,
  },
  {
    id: 3,
    imgURL:
      'https://images.unsplash.com/photo-1636099184052-ada1f331132c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '時尚藍芽耳機',
    content: '舒適配戴，支援降噪技術',
    price: 7990,
  },
  {
    id: 4,
    imgURL:
      'https://images.unsplash.com/photo-1672292086075-aa75f03ed2a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '機械式鍵盤',
    content: '機械鍵盤，打字手感極佳',
    price: 1890,
  },
  {
    id: 5,
    imgURL:
      'https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '無線滑鼠',
    content: '靜音按鈕設計，長效電池',
    price: 890,
  },
])

const carts = ref([
  {
    id: 3,
    imgURL:
      'https://images.unsplash.com/photo-1636099184052-ada1f331132c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '時尚藍芽耳機',
    content: '舒適配戴，支援降噪技術',
    price: 7990,
    quantity: 1
  }
]);

const showNotification = ref(false);
const notification = ref('');

provide('showNotification', showNotification);
provide('notification', notification);

const addCart = (product) => {
  // 檢查商品是否已在購物車中
  const existingItem = carts.value.find(item => item.id === product.id);
  if (existingItem) {
    // 如果已存在，增加數量
    existingItem.quantity += 1;
  } else {
    // 如果不存在，新增商品到購物車
    carts.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  }


  console.log(carts.value);

  // 顯示通知訊息
  notification.value = `${product.title} 已加入購物車`;

  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
    notification.value = '';
  }, 2000); // 通知顯示2秒後自動隱藏
};

const removeCart = (cart) => {
  console.log("父層removeCart:", cart);
  const index = carts.value.findIndex(item => item.id === cart.id);
  if (index !== -1) {
    carts.value.splice(index, 1);
  }
};

</script>
