<script setup>

</script>

<template>
  <div class="max-w-4xl p-4 bg-amber-50 md:rounded-xl">
    <p class="text-sm pb-8">(this represents the email the candidate gets)</p>
    <h2 class="text-3xl font-bold uppercase tracking-wide">Job offer</h2>
    <h2 class="text-xl opacity-80 pb-8">for Mari Maasikas</h2>
    <p class="pb-4">Hei, Mari! We'd like to offer you a job. <RouterLink to="/job-offers/{jobOfferSecretAccessToken}" class="text-blue-700 hover:text-blue-100">Click here</RouterLink> to see the offer.</p>
    <p class="">Marienthali Pruulikoda OÜ</p>
  </div>
</template>
