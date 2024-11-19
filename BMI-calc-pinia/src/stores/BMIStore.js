import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useBMIStore = defineStore('BMI', () => { //Stores used for all variables

    const userBMI = ref('')

    const weight = ref('')

    const height = ref('')

    function calculateBMI(height, weight) {  //Equation to calculate BMI
        if (height && weight ) {
            const bmi = weight / (height * height)
            userBMI.value = bmi.toFixed(2)
        } else {
            userBMI.value = ''
        }
    }


    return {
        userBMI,
        weight,
        height,
        calculateBMI
    }



})