<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const applicantData = ref({})

const getApplicantData = () => {
    axios.get(`./backend/api/new-employee-form/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X`)
    .then(response => {
        applicantData.value = response.data
    })
    .catch(error => {
        console.error('Error fetching form data:', error);
    })
}

getApplicantData()

</script>
<template>
    <form>
      <div class="space-y-12">
        <div class="border-b border-cyan-800/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-cyan-800">Uue töötaja isikuandmete ankeet</h2>
          <p class="mt-1 text-sm leading-6 text-cyan-700">Sinu töölepingu täitmiseks vajame mõningaid lisaandmeid.</p>
        </div>

        <div class="border-b border-cyan-800/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-cyan-800">Kandidaadi isikuandmed</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-cyan-800">Eesnimi</label>
              <div class="mt-2">
                <input required type="text" name="first-name" id="first-name" autocomplete="first-name" v-model="applicantData.applicant.firstName" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-cyan-800">Perekonnanimi</label>
              <div class="mt-2">
                <input required type="text" name="last-name" id="last-name" autocomplete="last-name" v-model="applicantData.applicant.lastName" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="national-identity-number" class="block text-sm font-medium leading-6 text-cyan-800">Isikukood</label>
              <div class="mt-2">
                <input required type="text" name="national-identity-number" id="national-identity-number" autocomplete="national-identity-number" v-model="applicantData.applicant.nationalIdentityNumber" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="date-of-birth" class="block text-sm font-medium leading-6 text-cyan-800">Sünnikuupäev</label>
              <div class="mt-2">
                <input required type="text" name="date-of-birth" id="date-of-birth" autocomplete="date-of-birth" v-model="applicantData.applicant.dateOfBirth" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
                <label for="gender" class="block text-sm font-medium leading-6 text-cyan-800">Sugu</label>
                <div class="mt-2">
                    <select required id="gender" name="gender" v-model="applicantData.applicant.gender" class="block w-full rounded-md border-0 py-2 px-1 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>Mees</option>
                        <option>Naine</option>
                    </select>
                </div>
            </div>
          </div>
        </div>

        <div class="border-b border-cyan-800/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-cyan-800">Kandidaadi kontaktandmed</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
              <label for="email-address" class="block text-sm font-medium leading-6 text-cyan-800">Meiliaadress</label>
              <div class="mt-2">
                <input required id="email-address" name="email-address" type="email-address" autocomplete="email-address" v-model="applicantData.contactDetails.emailAddress" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="phone-number" class="block text-sm font-medium leading-6 text-cyan-800">Kontaktelefoni number</label>
              <div class="mt-2">
                <input required id="phone-number" name="phone-number" type="phone-number" autocomplete="phone-number" v-model="applicantData.contactDetails.phoneNumber" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="postal-address" class="block text-sm font-medium leading-6 text-cyan-800">Elukoha aadress</label>
              <div class="mt-2">
                <input required type="text" name="postal-address" id="postal-address" autocomplete="postal-address" v-model="applicantData.contactDetails.postalAddress" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-cyan-800/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-cyan-800">Kandidaadi pangakonto andmed</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
              <label for="recipient-name" class="block text-sm font-medium leading-6 text-cyan-800">Pangakonto omanik</label>
              <div class="mt-2">
                <input required id="recipient-name" name="recipient-name" type="recipient-name" autocomplete="recipient-name" v-model="applicantData.bankAccount.recipientName" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="iban" class="block text-sm font-medium leading-6 text-cyan-800">IBAN ehk kontonumber</label>
              <div class="mt-2">
                <input required id="iban" name="iban" type="iban" autocomplete="iban" v-model="applicantData.bankAccount.iban" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>
        </div>

        <div class="border-b border-cyan-800/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-cyan-800">Hädaabikontakt</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-cyan-800">Eesnimi</label>
              <div class="mt-2">
                <input required type="text" name="first-name" id="first-name" autocomplete="first-name" v-model="applicantData.emergencyContact.firstName" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-cyan-800">Perekonnanimi</label>
              <div class="mt-2">
                <input required type="text" name="last-name" id="last-name" autocomplete="last-name" v-model="applicantData.emergencyContact.lastName" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
                <label for="relationship-type" class="block text-sm font-medium leading-6 text-cyan-800">Roll</label>
                <div class="mt-2">
                    <select required id="relationship-type" name="relationship-type" v-model="applicantData.emergencyContact.relationshipType" class="block w-full rounded-md border-0 py-2 px-1 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option value="child">Laps</option>
                        <option value="spouse">Abikaasa</option>
                        <option value="lifePartner">Elukaaslane</option>
                        <option value="father">Isa</option>
                        <option value="mother">Ema</option>
                        <option value="grandfather">Vanaisa</option>
                        <option value="grandmother">Vanaema</option>
                        <option value="brother">Vend</option>
                        <option value="sister">Õde</option>
                        <option value="uncle">Onu</option>
                        <option value="aunt">Tädi</option>
                        <option value="nephew">Õe-/vennapoeg</option>
                        <option value="niece">Õe-/vennatütar</option>
                        <option value="friend">Sõber</option>
                        <option value="other">muu</option>
                    </select>
                </div>
            </div>

            <div class="sm:col-span-3">
              <label for="email-address" class="block text-sm font-medium leading-6 text-cyan-800">Meiliaadress</label>
              <div class="mt-2">
                <input id="email-address" name="email-address" type="email-address" autocomplete="email-address" v-model="applicantData.emergencyContact.emailAddress" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="phone-number" class="block text-sm font-medium leading-6 text-cyan-800">Kontaktelefoni number</label>
              <div class="mt-2">
                <input required id="phone-number" name="phone-number" type="phone-number" autocomplete="phone-number" v-model="applicantData.emergencyContact.phoneNumber" class="block w-full rounded-md border-0 py-1.5 px-2 text-cyan-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink to="/job-offers/WNwi6CGqp9lgOmD4XeW8kZNdQr4DthiOpCXxOlVrh2XcJGeOuPeQ6d05o5hmyp4X">
            <button type="button" class="text-sm font-semibold leading-6 text-cyan-800">Tagasi tööpakkumisele</button>
        </RouterLink>
        <button type="submit" class="rounded-md bg-teal-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Salvesta ja esita andmed</button>
      </div>
    </form>
  </template>
