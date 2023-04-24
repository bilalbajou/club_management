

<template>
    <Head title="Dashboard" />

    <AdminDash>
      
    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Tableau du bord</h1>
            </div>
            
        </div>
    </div>

        <div class="py-1">
           
            <div class="ui grid stackable padded">
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header red">
                  <i class="icon users"></i>
                </div>
                <div class="header">
                  <div class="ui red header">
                    {{props.nb_joueurs}}
                  </div>
                </div>
                <div class="meta">
                  Joueurs
                </div>
                <div class="description">
                    {{props.nb_joueurs}} joueurs inscrits dans toutes les équipes et groupes d'âge différents                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui red button" :href="route('joueurs.index')" >Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header green">
                  <i class="icon clock"></i>
                </div>
                <div class="header">
                  <div class="ui header green">{{ props.nb_staffs }}</div>
                </div>
                <div class="meta">
                  Staffs
                </div>
                <div class="description">
                  {{ props.nb_staffs }} distribué à toutes les équipes et groupes d'âge
                </div>
              </div>
              <br>
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui green button" :href="route('staffs.index')"    >Plus D'infos</Link>
                </div>
              </div>
             
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header teal">
                  <i class="icon dollar"></i>
                </div>
                <div class="header">
                  <div class="ui teal header">{{ props.montant_primes }} DH</div>
                </div>
                <div class="meta">
                  Primes
                </div>
                <div class="description">
                  Montant global des primes
                </div>
              </div>
              <br>
              <br>
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui teal button" :href="route('primes.index')">Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header purple">
                  <i class="icon trophy"></i>
                </div>
                <div class="header">
                  <div class="ui purple header">{{props.montant_salaire}} DH</div>
                </div>
                <div class="meta">
                  Salaires
                </div>
                <div class="description">
                  Montant global des salaires
                </div>
              </div>
              <br>
              <br> 
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui purple button" :href="route('salaires.index')">Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


          

 

</div>



 


        
    </AdminDash>
</template>

<script setup>
import AdminDash from '@/Layouts/AdminDash.vue';
import { Head } from '@inertiajs/vue3';
import {Link} from '@inertiajs/vue3';
import {Chart} from 'chart.js';

const props=defineProps({
    nb_joueurs:Number,
    nb_staffs:Number,
    montant_primes:Number,
    montant_salaire:Number
})













</script>
