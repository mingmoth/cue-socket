<template>
    <div class="layout-flex-row">
        <slot name="left"></slot>
        <slot name="remain"></slot>
        <slot name="right"></slot>
    </div>
</template>

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

<style scoped>
.layout-flex-row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    row-gap: v-bind(gridGap);
    column-gap: v-bind(gridGap);
    padding: v-bind(layoutPadding);
    align-items: center;
}
</style>