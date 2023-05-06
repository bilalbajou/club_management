<script setup>
import { onMounted } from "vue";
import { router } from '@inertiajs/vue3'


const props = defineProps({
    id: Number
});



</script>
<template>
     <div class="ui longer modal" :id="'modalListeJoueurs'+props.id">
  <div class="header">Header {{ props.id }}</div>
  <div class="content">
     <p><p></p></p>
  </div>
</div>

</template>