<script setup lang="ts">
defineProps({
    descriptions: Object,
    descriptionsItem: Object,
    //需要渲染的数据
    data: Object,
})
</script>

<template>
    <el-descriptions v-bind="descriptions">
        <el-descriptions-item v-bind="descriptionsItem" :label="key" v-for="(value, key) in data" :key="key">
            {{ value }}
        </el-descriptions-item>
    </el-descriptions>
</template>
<style scoped>
</style>
