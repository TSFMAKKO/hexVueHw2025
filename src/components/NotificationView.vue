<template>
    <div v-if="showNotify" class="position-fixed top-0 end-0 p-3" style="z-index: 1050">
        <div class="toast show align-items-center text-white bg-success border-0">
            <div class="d-flex">
                <div class="toast-body">{{ notificationMessage }}</div>
                <button type="button" @click="showNotify = false; notificationMessage = ''" class="btn-close btn-close-white me-2 m-auto"></button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>

<script setup>
import { inject } from 'vue';
const showNotify = inject('showNotify');
const notificationMessage = inject('notifyMsg');

</script>