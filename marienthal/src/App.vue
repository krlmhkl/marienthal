<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const businessName = ref(null)

const getBusinessName = () => {
  axios.get(`./backend/api/job-offers/{jobOfferSecretAccessToken}`)
    .then(response => {
      businessName.value = response.data.businessName
    })
    .catch(error => {
      console.error('Error fetching job offer data:', error);
    })
}

getBusinessName()
</script>

<template>
  <div class="flex flex-col">
    <div class="sticky bg-amber-600 flex w-full flex-col align-middle">
      <RouterLink to="/" class="font-title text-2xl md:text-4xl py-12 text-white tracking-wider self-center">{{ businessName }}</RouterLink>
    </div>

    <div class="flex flex-col w-full items-center py-12">
      <RouterView />
    </div>
  </div>
</template>
