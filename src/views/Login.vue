<template>
<div>
    <div v-if="!loged">
        <input placeholder="Please input email" v-model="email">
        <input placeholder="Please input password" v-model="password" show-password>
        <button @click="login">Login</button>
    </div>
    <div v-if="loged">
        <h1>You are logged in</h1>
        <button @click="logout">LogOut</button>
    </div>
</div>

</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    loged () {
      return this.$store.state.logedIn
    }
  },
  methods: {
    login () {
      // There is no database to check if user is exist or if is register so I just assume that everybody exist
      if (this.validateEmail(this.email)) this.$store.dispatch('logIn')
      else alert('Error with email or password!')
    },
    logout () {
      if (this.loged) this.$store.dispatch('logOut')
    },
    validateEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>
