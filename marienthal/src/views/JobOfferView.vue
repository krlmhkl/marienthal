<script setup>
import axios from 'axios'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { RouterView } from 'vue-router';

const applicantData = ref({})
const offerData = ref({})
const readConfirm = ref(false)
const candidateFormOpen = ref(false)

const formatDate = (dateString) => {
    const date = dayjs(dateString)
    return date.format('MMMM D, YYYY')
}

const getOfferData = () => {
  axios.get(`./backend/api/job-offers/{jobOfferSecretAccessToken}`)
    .then(response => {
      offerData.value = response.data
    })
    .catch(error => {
      console.error('Error fetching job offer data:', error);
    })
}

const getApplicantData = () => {
    axios.get(`./backend/api/new-employee-form/{jobOfferSecretAccessToken}`)
    .then(response => {
        applicantData.value = response.data
    })
    .catch(error => {
        console.error('Error fetching form data:', error);
    })
}

getOfferData()
getApplicantData()

</script>

<template>
    <div class="flex flex-col max-w-4xl justify-center pt-8">
        <div class="flex flex-col pb-8 md:flex-row md:gap-4 justify-between">
            <!-- Eyecatcher -->
            <div class="flex flex-col px-4 lg:px-0">
                <p class="text-xs text-cyan-800">{{ offerData.contract.structureTreeFullPath }}</p>
                <h1 class="font-medium uppercase tracking-widest text-cyan-600 pb-8">{{ offerData.pageTitle }}</h1>
                <p class="text-4xl font-bold uppercase text-amber-600 tracking-wider pb-4">{{ offerData.applicant.firstName }} {{ offerData.applicant.lastName }}!</p>
                <p class="text-3xl uppercase font-regular leading-none text-cyan-600 tracking-wider pb-8">Ole meie järgmine <p class="font-bold text-amber-600 tracking-widest">{{ offerData.contract.positionName }}!</p> </p>
            </div>
            <div class="flex w-full md:w-1/2">
                <img class="md:rounded-xl w-full origin-center hover:scale-105 transition" src="https://thumbnails.production.thenounproject.com/SX3yPvB2-ZSm-zTcbiaYi4ixXgY=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D1761A08-2303-4FD2-B53F-0882B494F5AD.jpg">
            </div>
        </div>
        <div class="md:max-w-4xl bg-cyan-50 md:rounded-xl p-8 text-cyan-800">
            <!-- Main content -->

            <p class="">{{ offerData.welcomeText }}</p>

            <h2 class="text-xl font-bold uppercase tracking-wide pt-8 pb-4 text-amber-600">Tingimused</h2>
            <div class="flex flex-col gap-4">
                <div v-if="offerData.contract.contractType">
                    <p class="uppercase tracking-wide text-xs font-medium">Lepingu tüüp</p>
                    <p>{{ offerData.contract.contractType }}</p>
                </div>
                <div v-if="offerData.contract.startDate">
                    <p class="uppercase tracking-wide text-xs font-medium">Tööle asumise kuupäev</p>
                    <p>{{ formatDate(offerData.contract.startDate) }}</p>
                </div>
                <div>
                    <p class="uppercase tracking-wide text-xs font-medium">Töösuhte lõppkuupäev</p>
                    <p v-if="offerData.contract.endDate">{{ formatDate(offerData.contract.endDate) }}</p>
                    <p v-else>Tähtajatu</p>
                </div>
                <div v-if="offerData.contract.remunerationType">
                    <p class="uppercase tracking-wide text-xs font-medium">Töötasu liik</p>
                    <p>{{ offerData.contract.remunerationType }}</p>
                </div>
                <div v-if="offerData.contract.remunerationGrossAmount">
                    <p class="uppercase tracking-wide text-xs font-medium">Töötasu (bruto)</p>
                    <p>{{ offerData.contract.remunerationGrossAmount }} {{ offerData.contract.remunerationCurrency }}</p>
                </div>
                <div>
                    <p class="uppercase tracking-wide text-xs font-medium">Katseaeg</p>
                    <p>{{ formatDate(offerData.contract.probationaryPeriodStartDate) }} - {{ formatDate(offerData.contract.probationaryPeriodEndDate) }}</p>
                </div>
            </div>

            <h2 class="text-xl font-bold uppercase tracking-wide pt-8 text-amber-600">Hüved</h2>

            <ul v-for="benefit in offerData.benefits" :key="benefit">
                <p>{{ benefit }}</p>
            </ul>

            <div class="flex items-center my-6">
                <input id="link-checkbox" type="checkbox" v-model="readConfirm" class="w-6 h-6 text-amber-500 color-amber-300 bg-amber-100 border-amber-300 rounded focus:ring-amber-500 focus:ring-1">
                <label for="link-checkbox" class="ml-2 text-sm font-medium">Olen tööpakkumise läbi lugenud ja nõustun selle tingimustega.</label>
            </div>

            <RouterLink to="/new-employee-form/{jobOfferSecretAccessToken}">
                <button :disabled="readConfirm === false" @click="candidateFormOpen = true" class="text-white bg-teal-700 hover:bg-teal-600 py-2 px-4 rounded-md disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed">
                    Nõustun tööpakkumisega
                </button>
            </RouterLink>
        </div>

    </div>
</template>
