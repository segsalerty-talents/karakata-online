<template>
  <div class="scale-up">
    <SalesDashboard />
  </div>
</template>

<script>
import SalesDashboard from '@/components/admin_dashboard'

export default {
  components: {
    SalesDashboard
  },
  methods: {},
  computed: {}
}
</script>

<style>
  @media screen and (max-width: 1400px) {
    .scale-up {
      transform: scale(0.90);
    }
  }
  @media screen and (max-width: 1240px) {
    .scale-up {
      transform: scale(0.85);
      margin-left: 2px;
    }
  }
</style>
