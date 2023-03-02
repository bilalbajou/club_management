<script setup>

import Card from "./Card.vue";
const props = defineProps({
   joueurs:Array
});




</script>



<template>
     <h3 v-show="joueurs.length==0" class="ui center aligned header">
        Aucun joueur trouvé</h3>
   
    
    <div class="ui three column doubling stackable grid container">
        <div v-for="joueur in joueurs" class="column">
           <Card :joueur="joueur" />
        </div>
    
    </div>
</template>
