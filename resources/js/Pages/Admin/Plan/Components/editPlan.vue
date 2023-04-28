<script setup>
import { useForm } from "@inertiajs/vue3";
 // toastr add player
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

const props = defineProps({
    plan: Object
});





const form = useForm({
    duree: String(props.plan.duree),
    montant:props.plan.montant
});

const submitForm = () => {
   
    
    form.patch(route("plans.update",props.plan.id),{
        onSuccess:()=>{
            toastr["success"]("Plan a été modifié avec succés", "Opération réussi");
            form.reset();
        },
        onError:()=>{
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        }

    });
};

</script>
<template>
    <div class="ui tiny modal" :id="'modalEditPlan'+props.plan.id">
        <i class="close icon"></i>
        <div class="header">Modifier plan</div>
        <div class="image content">
            <div class="description">
                <form @submit.prevent="submitForm" class="ui form">
                    <div class="two fields">
               
                        <div class="field" :class="form.errors.duree ? 'error':''">
                            <label>Durée</label>
                            <select
                                v-model="form.duree"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="1">1 Mois</option>
                                <option value="3">3 Mois</option>
                                <option value="6">6 Mois</option>
                                <option value="12">12 Mois</option>
                            </select>
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error':''">
                            <label>Montant (DH)</label>

                            <input
                                v-model="form.montant"
                                type="text"
                                placeholder="Montant"
                            />
                        </div>
                    </div>
                        
                       
                 
                    
                
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div
                :disabled="form.processing"
                @click="submitForm"
                class="ui right labeled icon button"
            >
                Modifier
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
