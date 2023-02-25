<template>
<div class="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
      

      <Link :href="route('dashboard')" class="item">
        <div class="">
          <i class="icon chart line"></i>
          Tableau du bord
        </div>
      </Link>
      <Link :href="route('joueurs.index')" class="item">
        <div>
          <i class="icon chart line"></i>
          Joueur 
        </div>
      </Link>
      <a href="#" class="item">
        <div>
          <i class="icon chart line"></i>
          Jeueur
        </div>
      </a>

     
</div>




</template>

<script setup>
import {Link} from '@inertiajs/vue3'


</script>


