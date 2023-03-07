<script setup>
 import { Link } from '@inertiajs/vue3'

 $(document).ready(function(){

   $('.dropdown')
    .dropdown()
  ;
  });




</script>
<template>
      <nav class="ui top fixed inverted menu">
      <div class="left menu">
        <a href="#" class="sidebar-menu-toggler item" data-target="#sidebar">
          <i class="sidebar icon"></i>
        </a>
        <a href="#" class="header item">
          WAC
        </a>
      </div>

      <div class="right menu">
        <a href="#" class="item">
          <i class="bell icon"></i>
        </a>
        <div class="ui dropdown item" tabindex="0">
          <i class="user cirlce icon"></i>
          <div class="menu left transition hidden" tabindex="-1" style="display: block !important;">
           
            <Link :href="route('profile.edit')" class="item">
              <i class="info circle icon"></i>
              Profil</Link>
            <Link :href="route('logout')" as="button" method="post" class="item">
              <i class="sign-out icon"></i>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
</template>




