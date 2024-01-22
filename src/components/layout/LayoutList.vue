<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    gap: {
        type: String,
        default: '0'
    },
    padding: {
        type: String,
        default: '0'
    },
})

const { gap, padding } = toRefs(props)

const gridGap = computed(() => `${ gap.value }px`)
const layoutPadding = computed(() => `${ padding.value }px`)
</script>

<template>
    <div class="layout-list">
        <slot></slot>
    </div>
</template>

<style scoped>
.layout-list {
    display: grid;
    grid-template-columns: minmax(0, auto);
    row-gap: v-bind(gridGap);
    column-gap: v-bind(gridGap);
    padding: v-bind(layoutPadding);
    align-items: start;
}
</style>