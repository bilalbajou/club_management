<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<!-- <template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template> -->

<template>
    <GuestLayout>
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui teal image header">
                    <div class="content">Connectez-vous à votre compte</div>
                </h2>
                <form @submit.prevent="submit" class="ui large form error">
                    <div class="ui stacked segment">
                        <div
                            class="field"
                            :class="form.errors.email ? 'error' : ''"
                        >
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input
                                    v-model="form.email"
                                    autofocus
                                    autocomplete="username"
                                    type="email"
                                    placeholder="E-mail adresse"
                                />
                            </div>
                        </div>
                        <div
                            class="field"
                            :class="form.errors.password ? 'error' : ''"
                        >
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input
                                    type="password"
                                    v-model="form.password"
                                    autocomplete="current-password"
                                    name="password"
                                    placeholder="Mot de passe"
                                />
                            </div>
                        </div>
                        <div
                            class="field"
                            :class="form.errors.remember ? 'error' : ''"
                        >
                            <div class="ui checkbox">
                                <input type="checkbox" v-model="form.remember" />
                                <label>Souviens-toi de moi</label>
                            </div>
                        </div>

                        <div
                            @click="submit"
                            :disabled="form.processing"
                            class="ui fluid large teal submit button"
                            :class="form.processing ? 'loading':''"
                        >
                            Connecter
                        </div>
                    </div>

                    <div v-if="form.hasErrors" class="ui error message">
                        <ul class="list">
                            <li v-for="(error, key) in form.errors" :key="key">
                                {{ error }}
                            </li>
                        </ul>
                    </div>
                    <div v-show="$page.props.flash.error" class="ui error message">
                        <ul class="list">
                            <li>{{ $page.props.flash.error }}</li>
                        </ul>
                    </div>
                        
                </form>

                <div class="ui message">
                    Mot de passe oublié
                    <Link
                      
                        :href="route('password.request')"
                        ><b>Réinitialisez mot de passe</b>
                    </Link>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
