<template>
  <div>
    <h1>Listado de Departamentos</h1>
    <department/>
  </div>
</template>

<script>
// @ is an alias to /src
import Department from '../components/Department.vue'

export default {
  name: 'ListDepartment',
  components: {
    Department
  }
}
</script>
    Department