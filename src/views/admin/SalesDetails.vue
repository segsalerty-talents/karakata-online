<template>
  <div id="main" class="pl-7">
    <div @click="navigateBack()" class="cursor-pointer mb-6 flex items-center primary_color font-semibold">
      <img
        :src="require('@/assets/img/homeDashboardIcons/arrowleft.svg')" class="mr-4"
      />
      <p>Back</p>
    </div>
    <div v-if="historyLoaded">
      <p class="text-xl font-bold">Invoice {{ this.$route.params.invoicenumber }} to {{ currentSalesHistory.number.substr(0, 7).match(/.{1,4}/g).join(' ') }} *** {{ currentSalesHistory.number.substr(10) }}</p>
      <!-- Current segment -->
      <p :class="`${currentSalesHistory.current_segment}`" class="w-28 my-4 rounded-xl text-white px-6 py-2">{{ currentSalesHistory.current_segment }}</p>
      <div v-for="(log, index) in currentSalesHistory.interactions[1].sub_header" :key="index" class="flex items-center mb-3">
        <img :src="require('@/assets/img/OvalSM.svg')" class="mr-3" /><p>{{ log.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import salesdetail from '@/data/salesdetails'
export default {
  name: 'salesdata',
  mounted () {
    this.currentSalesHistory = salesdetail.find(
      (element) => parseInt(element.invoice_number) === parseInt(this.$route.params.invoicenumber)
    )
    console.log(this.currentSalesHistory)
    this.historyLoaded = true
  },
  data () {
    return {
      currentSalesHistory: null,
      historyLoaded: false
    }
  },
  methods: {
    navigateBack () {
      this.$router.push({ name: 'sales' })
    }
  }
}
</script>

<style scoped>
.primary_color {
  color: #C16951;
}
.Paid {
  background-color: #2BB826;
  color: #fff;
}
.Pending {
  background-color: #FA8F21;
  color: #fff;
}
.Canceled {
  background-color: #FF1000;
  color: #fff;
}
</style>
