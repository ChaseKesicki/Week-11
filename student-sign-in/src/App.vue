<script setup> //App.vue puts all of our components together to be used
// code goes here

import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

</script>

<template>
<!--HTML template here-->


<StudentTable></StudentTable>

<StudentMessage></StudentMessage>

<NewStudentForm></NewStudentForm>

</template>

<style scoped>
/*CSS for this component here */


</style>