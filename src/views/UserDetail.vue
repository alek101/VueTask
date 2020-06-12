<template>
    <div v-if="loged">
        <h1> User Details </h1>
        <router-link to="/users">Users</router-link>
        <ul>
          <li>User login: {{ user.login }}</li>
          <li>User id: {{ user.id }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: [
    'id'
  ],
  computed: {
    user () {
      return this.$store.state.usersData[this.id]
    },
    loged () {
      return this.$store.state.logedIn
    }
  }
}
</script>
