<template>
    <div class="h-itemsDashboard w-full absolute bottom-0 bg-blue flex justify-evenly items-center">
        <Item :item="item" v-for="item in items" />
    </div>
</template>

<script setup>
let items = ["tree", "tree", "tree", "tree", "tree", "tree", "tree"]
</script>