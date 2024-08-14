<script setup lang="ts">
import { ref, onMounted } from 'vue'
const list = ref([])

onMounted(() => {
  const eventSource = new EventSource('/api/sse/hello');
  eventSource.onmessage = (event) => {
    list.value.push(`[${new Date().toLocaleString()}] ${event.data}`)
    if (list.value.length > 10) {
      eventSource.close()
    }
  }
})

</script>
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert title="fff">
      This is an auto-imported component
    </AppAlert>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>

</template>