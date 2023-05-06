<script setup>
 import { Link } from '@inertiajs/vue3';

 import {useForm} from '@inertiajs/vue3';


 toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "1500",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

 $(document).ready(function(){
   $('.dropdown')
    .dropdown()
  ;
  $('.item')
    .popup({
      on: 'hover'
    })
  ;



  });

const form=useForm([]);


  const backup=()=>{

    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir faire backup!",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Confirmer'
}).then((result) => {
  if (result.isConfirmed) {
    form.get(route('backup.index'),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Backup effectué avec succès", "Opération réussi");
        },
        onError:()=>{
            toastr["error"]("Erreur lors de la sauvegarde", "Opération échoué");
        }

    });
    
  }
})

  }


  
</script>
<template>
      <nav class="ui top fixed inverted menu">
      <div class="left menu">
        <a href="#" class="sidebar-menu-toggler item" data-target="#sidebar">
          <i class="sidebar icon"></i>
        </a>
        <img class="ui mini circular image" src="image/logo_club.png">

        <a href="#" class="header item">
          Casa football club
        </a>
      </div>

      <div class="right menu">
        <a data-content="Backup"  @click="backup" class="item">
          <i class="database icon"></i>
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

