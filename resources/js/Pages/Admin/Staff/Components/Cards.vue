<script setup>

import Card from "./Card.vue";
const props = defineProps({
   staffs:Object
});




</script>



<template>
     <h3 v-show="staffs.length==0" class="ui center aligned header">
        Aucun enregistrement trouvé</h3>
   
    
    <div class="ui three column doubling stackable grid container">
        <div v-for="staff in staffs.data" class="column">
           <Card :staff="staff" />
        </div>
    
    </div>
</template>
