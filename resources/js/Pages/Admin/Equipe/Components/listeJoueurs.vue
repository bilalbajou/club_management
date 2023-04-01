<script setup>
import { onMounted } from "vue";
import { router } from '@inertiajs/vue3'


const props = defineProps({
    id: Number
});


onMounted(() => {
//    router.get(route('equipe.joueurs',{
//     id:props.id
   
// }),{
      
// },
// {
//    preserveState:true,
//    replace:true,
//    preserveScroll:true,
//    onSuccess:()=>{
//          console.log("success");
//    }
// })



});
</script>
<template>
     <div class="ui longer modal" :id="'modalListeJoueurs'+props.id">
  <div class="header">Header {{ props.id }}</div>
  <div class="content">
     <p></p>
  </div>
</div>

</template>