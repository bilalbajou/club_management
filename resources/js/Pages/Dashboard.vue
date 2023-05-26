<script setup>
import AdminDash from '@/Layouts/AdminDash.vue';
import { Head } from '@inertiajs/vue3';
import {Link} from '@inertiajs/vue3';
import pieChart from '@/Components/PieChart.vue';
import Calendar from '@/Components/Calendar.vue';








const props=defineProps({
    nb_joueurs:Number,
    nb_staffs:Number,
    montant_primes:Number,
    montant_salaire:Number,
    nb_plans:Number,
    nb_matches:Number,
    nb_entrainements:Number,
    nb_equipes:Number,
    data_pie:Array
})




</script>

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
                  <i class="icon users"></i>
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
                  <i class="icon money bill alternate
"></i>
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

        <div class="ui grid stackable padded">
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header red">
                  <i class="icon file alternate"></i>
                </div>
                <div class="header">
                  <div class="ui red header">
                    {{props.nb_plans}}
                  </div>
                </div>
                <div class="meta">
                  Plan d'abonnements d'inscription
                </div>
                <div class="description">
                  il existe {{ props.nb_plans }} plans d'abonnements d'inscription 
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui red button" :href="route('plans.index')" >Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header green">
                  <i class="icon futbol"></i>
                </div>
                <div class="header">
                  <div class="ui header green">{{ props.nb_matches }}</div>
                </div>
                <div class="meta">
                  Matches
                </div>
                <div class="description">
                  {{ props.nb_matches }}  Matches programmés pour tous les différents équipes
                </div>
              </div>
              <br>
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui green button" :href="route('matches.index')"    >Plus D'infos</Link>
                </div>
              </div>
             
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header teal">
                  <i class="icon calendar"></i>
                </div>
                <div class="header">
                  <div class="ui teal header">{{ props.nb_entrainements }}</div>
                </div>
                <div class="meta">
                  Entrainements
                </div>
                <div class="description">
                  {{ props.nb_entrainements }}  scéances d'entrainements programmés pour tous les différents équipes
                </div>
              </div>
              
              
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui teal button" :href="route('entrainements.index')">Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="four wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
                <div class="ui right floated header purple">
                  <i class="icon sitemap"></i>
                </div>
                <div class="header">
                  <div class="ui purple header">{{props.nb_equipes}}</div>
                </div>
                <div class="meta">
                  Equipes
                </div>
                <div class="description">
                  il existe {{ props.nb_equipes }} equipes dans le club 
                </div>
              </div>
              <br>
              <br> 
              <div class="extra content">
                <div class="ui two buttons">
                  <Link class="ui purple button" :href="route('equipes.index')">Plus D'infos</Link>
                </div>
              </div>
            </div>
          </div>
          
          
       
        </div>
        <div class="ui grid stackable padded">
          <div class="eight wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
               
                <pieChart :data_pie="data_pie" />

                
                
              </div>
             
            </div>
          </div>
          <div class="eight wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
              </div>
              
             
             
            </div>
          </div>
         
          
          
       
        </div>

        <div class="ui grid stackable padded">
          <div class="sixteen wide computer eight wide tablet sixteen wide mobile column">
            <div class="ui fluid card">
              <div class="content">
               <Calendar />
                

                
                
              </div>
             
            </div>
          </div>
          
        </div>




          

 

</div>



 


        
    </AdminDash>
</template>


