<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bem vindo ao E-Facilitador
        </h1>
        
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
        </tr>
        </tbody>
      </table>
      
      </v-col>      
    </v-row>
    <button button class="btn btn-primary" @click="fetchUsers()">Consultar</button>
  </v-container>
</template>


<script>
import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      let headers = {
        'Access-Control-Allow-Origin': '*'
      }
      
      
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      // const baseURI = 'https://proxyapp.correios.com.br/v1/sro-rastro/QH093642676BR'

      axios.get(baseURI, { headers: headers })
        .then(response => {
          console.log(response)
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
      
    }
  }
  }
</script>
