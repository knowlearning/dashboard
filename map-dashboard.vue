<template>
  <pre>{{ states }}</pre>
</template>

<script>

  export default {
    props: {
      scope: String,
      users: Object
    },
    data() {
      return {
        states: {}
      }
    },
    created() {
      //  TODO: wire in unwatch
      Object
        .entries(this.users)
        .forEach(async ([user]) => {
          this.states[user] = await (
            Agent
              .state(this.scope, user)
              .watch(({ state }) => this.states[user] = state)
          )
        })
    }
  }

</script>