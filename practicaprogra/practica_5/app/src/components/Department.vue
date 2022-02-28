<template>
     <b-table striped hover :items="departments" :fields="fields"></b-table>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Employee',
    data(){
        return{
            departments:[],

        }
    },
    created(){
        axios.get('https://api-crud-example.herokuapp.com/Department/read')
        .then(response=>{
            this.departments = response.data
            console.log(response.data)
        })
        .catch(e=>{
            this.errors.push(e)
        })
    }   
}
</script>