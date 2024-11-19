import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

//StudentStore stores all of our functions, computed properties and variables to be used across all of our programs
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        { name: 'A. Student', starID: 'aa1234aa', present: false},
        { name: 'B. Student', starID: 'bb1234bb', present: false}
    ])

    const mostRecentStudent = ref( {} )  //empty object


    function addNewStudent(student) {  //adds new student to the list
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {  //deletes students from list when button is pressed
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        } )
        mostRecentStudent.value = {} //reset most recent message
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed( () => { //keeps track of number of students in list
        return studentList.value.length
    })

    const sortedStudents = computed( () => {  //sorts students alphabetically in our list
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    return {
        studentList,
        mostRecentStudent,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        studentCount,
        sortedStudents
    }


})