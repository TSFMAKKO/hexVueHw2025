<template>
    <div class="col-md-8">
        <h2 class="mb-3">商品列表</h2>
        <div class="row">
            <div class="col-md-4 mb-4" v-for="p in products" :key="p.id">
                <div class="card h-100">
                    <img :src="p.imgURL" :alt="p.title" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ p.title }}</h5>
                        <p class="card-text">{{ p.content }}</p>
                        <p class="fw-bold text-primary">{{ p.price }}</p>
                        <button class="btn btn-success w-100" @click="addCart(p)"> 加入購物車 </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
});
const emit = defineEmits(['add-cart']);
const addCart = (product) => {
    emit('add-cart', product);
};



</script>