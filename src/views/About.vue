<template>
  <!-- <div id="app" class="container py-4"> -->
  <div class="row">
    <!-- 商品列表區 -->
    <div class="col-md-8">
      <h2 class="mb-3">商品列表</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="p in products" :key="p.id">
          <div class="card h-100">
            <img
              :src="p.imgURL"
              :alt="p.title"
              class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ p.title }}</h5>
              <p class="card-text">{{ p.content }}</p>
              <p class="fw-bold text-primary">{{ p.price }}</p>
              <button class="btn btn-success w-100"> 加入購物車 </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 購物車區 -->
    <div class="col-md-4">
      <h2 class="mb-3">購物車</h2>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 class="my-0">時尚藍牙耳機</h6>
            <small class="text-muted">數量：1</small>
          </div>
          <div>
            <span class="text-muted">$7990</span>
            <button class="btn btn-sm btn-outline-danger ms-2"> 移除 </button>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- 通知元件 -->
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 1050">
    <div class="toast show align-items-center text-white bg-success border-0">
      <div class="d-flex">
        <div class="toast-body">這是通知訊息</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto"></button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
body {
  background: #f2f2f2f2;
}

/* .card-img-top {
  height: 150px;
  object-fit: cover;
}  */
</style>

<script setup>
import { ref,provide } from 'vue';
// import { useRouter } from 'vue-router';
// import axios from 'axios';

// const router = useRouter();
// 商品資料
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



</script>
