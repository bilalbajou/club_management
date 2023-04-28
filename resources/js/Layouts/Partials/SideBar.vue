<script setup>
import {Link} from '@inertiajs/vue3'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

const user = computed(() => usePage().props.auth.user)
</script>
<template>
  <div class="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
        
  
        <Link :href="route('dashboard')" class="item">
          <div class="">
            <i class="icon chart line"></i>
            Tableau du bord
          </div>
        </Link>
        <Link :href="route('equipes.index')" class="item">
          <div class="">
            <i class="icon sitemap"></i>
            Equipe
          </div>
        </Link>
        <Link :href="route('joueurs.index')" class="item">
          <div>
            <i class="icon users"></i>
            Joueur 
          </div>
        </Link>
        <Link :href="route('staffs.index')" class="item">
          <div>
            <i class="icon user"></i>
            Staff Techniques
          </div>
        </Link>
        <Link :href="route('matches.index')" class="item">
          <div>
            <i class="icon futbol"></i>
            Match
          </div>
        </Link>
        <Link :href="route('entrainements.index')" class="item">
          <div>
            <i class="icon calendar
  "></i>
            Entrainement
          </div>
        </Link>
        <Link :href="route('primes.index')" class="item">
          <div>
            <i class="icon money
  "></i>
            Prime
          </div>
        </Link>
        <Link :href="route('salaires.index')" class="item">
          <div>
            <i class="dollar sign icon"></i>
           Reg Salaire
          </div>
        </Link>
        <Link :href="route('plans.index')" class="item">
          <div>
            <i class="file alternate
 icon"></i>
           Plans
          </div>
        </Link>
        
        <Link v-show="user.role=='admin'" :href="route('users.index')" class="item">
          <div>
            <i class="icon user circle

  "></i>
            Utilisateur
          </div>
        </Link>
      
  
       
  </div>
  
  
  
  
  </template>
  
