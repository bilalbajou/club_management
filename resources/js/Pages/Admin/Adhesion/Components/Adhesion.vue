<script setup>


const props = defineProps({
    joueur:Object,
    index:Number
});



</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td> {{ joueur.prenom }} {{ joueur.nom }}</td>
      <td> {{ joueur.age }} Ans</td>
      <td> {{ joueur.montant_global }} DH</td>
      <td> {{ joueur.derniere_paiement }}</td>
      <td> {{ joueur.date_echeance }}</td>
      <td> {{ joueur.equipeNom }}</td>
      <td> {{ joueur.duree }} Mois</td>
      

    
      <td>

      </td>
      
    </tr>



</template>