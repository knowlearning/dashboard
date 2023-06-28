<template>
  <div>
    <MapDashboard
      :scope="scope"
      :users="users"
    />
  </div>
</template>

<script>
  import MapDashboard from './map-dashboard.vue'

  export default {
    components: {
      MapDashboard
    },
    data() {
      return {
        scope: 'ea53e97c-974d-4658-8d39-4d8057c98633',
        users: {
          'Z27illIpwKSKyneNpxhCEZiTjLJ2': {
            // name/zero knowledge config
          }
        }
      }
    }
  }
</script>

<style scoped>
</style>
