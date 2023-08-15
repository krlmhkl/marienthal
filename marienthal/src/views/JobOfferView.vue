<script setup>
import axios from 'axios'
import { ref } from 'vue'
import dayjs from 'dayjs'

const applicantData = ref({})
const offerData = ref({})

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
</template>
