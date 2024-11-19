<script setup>

import { useBMIStore } from './stores/BMIStore'
import { watch } from 'vue'

const BMIStore = useBMIStore()  //All variables are stored

watch(() => [BMIStore.height, BMIStore.weight], ([height, weight]) => {
  BMIStore.calculateBMI(height, weight)
}) //Watch checks for when data is entered for height at weight

</script>

<template>

<h2>Enter your height and weight</h2>

<div> <!--The inputs go to the stores rather than being used in the file-->
    <label for="userHeight">Height in meters </label>
    <input v-model="BMIStore.height" id="userHeight"><br> 
    <label for="userWeight">Weight in kilograms</label>
    <input v-model="BMIStore.weight" id="userWeight">
</div>

<div v-if="BMIStore.userBMI">  <!--Checks if BMI has been calculated. If it has, then it is displayed-->
    <h3>Your BMI: {{ BMIStore.userBMI }}</h3>
</div>

</template>

<style scoped>

</style>
