<script setup>
import {Link} from '@inertiajs/vue3'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

const user = computed(() => usePage().props.auth.user)
const page = usePage()




</script>
<template>
  <div class="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
        
  
        <Link :href="route('dashboard')" :class="$page.url.startsWith('/dashboard') ?'item active':'item'" >
          <div class="">
            <i class="icon chart line"></i>
            Tableau du bord
          </div>
        </Link>
        <Link :href="route('equipes.index')" :class="$page.url.startsWith('/equipes') ?'item active':'item'">
          <div class="">
            <i class="icon sitemap"></i>
            Equipe
          </div>
        </Link>
        <Link :href="route('joueurs.index')" :class="$page.url.startsWith('/joueurs') ?'item active':'item'">
          <div>
            <i class="icon users"></i>
            Joueur 
          </div>
        </Link>
        <Link :href="route('staffs.index')" :class="$page.url.startsWith('/staffs') ?'item active':'item'">
          <div>
            <i class="icon user"></i>
            Staff Techniques
          </div>
        </Link>
        <Link :href="route('matches.index')" :class="$page.url.startsWith('/matches') ?'item active':'item'">
          <div>
            <i class="icon futbol"></i>
            Match
          </div>
        </Link>
        <Link :href="route('entrainements.index')" :class="$page.url.startsWith('/entrainements') ?'item active':'item'">
          <div>
            <i class="icon calendar
  "></i>
            Entrainement
          </div>
        </Link>
        <Link :href="route('primes.index')" :class="$page.url.startsWith('/primes') ?'item active':'item'">
          <div>
            <i class="icon money
  "></i>
            Prime
          </div>
        </Link>
        <Link :href="route('salaires.index')" :class="$page.url.startsWith('/salaires') ?'item active':'item'" >
          <div>
            <i class="dollar sign icon"></i>
           Reg Salaire
          </div>
        </Link>
        <Link :href="route('plans.index')" :class="$page.url.startsWith('/plans') ?'item active':'item'">
          <div>
            <i class="file alternate
 icon"></i>
           Plans
          </div>
        </Link>

        <Link :href="route('adhesions.index')" :class="$page.url.startsWith('/adhesions') ?'item active':'item'">
          <div>
            <i class="bookmark

 icon"></i>
           Adhésion 
          </div>
        </Link>
      
        
        <Link v-show="user.role=='admin'" :href="route('users.index')" :class="$page.url.startsWith('/users') ?'item active':'item'">
          <div>
            <i class="icon user circle

  "></i>
            Utilisateur
          </div>
        </Link>
      
  
       
  </div>
  
  
  
  
  </template>
  
