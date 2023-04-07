<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import NavBar from './Partials/NavBar.vue';
import SideBar from './Partials/SideBar.vue';
import Footer from './Partials/Footer.vue';

$(document).ready(function() {
  $('.ui.dropdown').dropdown();
  $('.sidebar-menu-toggler').on('click', function() {
    var target = $(this).data('target');
    $(target)
      .sidebar({
        dinPage: true,
        transition: 'overlay',
        mobileTransition: 'overlay'
      })
      .sidebar('toggle');
  });
});



</script>

<template>
    <NavBar />
    <SideBar />
    <div class="pusher">
      <div class="main-content">
          <slot />
      </div>
    </div>


    
   

  
 
       
</template>