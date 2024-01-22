<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'

const menuItems = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Lang',
        icon: 'pi pi-fw pi-info-circle',
        items: [
            {
                label: 'en',
            },
            {
                label: 'zh-tw',
            }
        ]
    }
])
</script>

<template>
    <RouterView />
</template>
