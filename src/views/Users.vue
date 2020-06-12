<template>
    <div v-if="loged">
        <h1> User list </h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <div>
                    <span>{{user.login}}</span>|
                    <router-link v-bind:to='"/user/"+user.order'>User</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Users',
  created () {
    this.$store.dispatch('getUsers')
  },
  computed: {
    users () {
      return this.$store.state.usersData
    },
    loged () {
      return this.$store.state.logedIn
    }
  }
}
</script>
