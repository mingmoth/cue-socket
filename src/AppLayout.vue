<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menubar from 'primevue/menubar'
import { ref } from 'vue';

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
    <Menubar :model="menuItems">
    </Menubar>
    <RouterView />
</template>
