<script setup>
import {ref,onMounted} from 'vue'

const count = ref(0)

function increment(){
    count.value++
}

onMounted(()=>{
    console.log('vue')
})

</script>

<template>
<button @click = 'increment'>count: {{count}}</button>
</template>

