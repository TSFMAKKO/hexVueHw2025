<template>
    <div class="col-md-4">
        <h2 class="mb-3">購物車</h2>
        <ul class="list-group mb-3">
            <li v-for="c in carts" :key="c.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="my-0">{{ c.title }}</h6>
                    <small class="text-muted">{{ c.price }}</small>
                </div>
                <div>
                    <span class="text-muted">{{ c.quantity }}</span>
                    <button class="btn btn-sm btn-outline-danger ms-2" @click="removeCart(c)"> 移除 </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
// import { log } from 'node:console';
import { defineProps } from 'vue';
const props = defineProps({
    carts: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['remove-cart']);


const removeCart = (cart) => {
    // log(cart);
    console.log("子層removeCart:",cart);
    
    emit('remove-cart', cart);
};

</script>