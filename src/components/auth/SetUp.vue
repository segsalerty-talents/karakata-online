<template>
  <c-box width="100%" mr="1" mb="1">
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business kind</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_kind"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Business sales channel</c-form-label>
        <c-select
          placeholder="Select Channels"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="salesChannel"
        >
          <option value="1">POS</option>
          <option value="2">Bank Transfer</option>
        </c-select>
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business avg existing customers</c-form-label
        >
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="existingCustomer"
          placeholder="1000"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939"
          >Business avg sales per month</c-form-label
        >
        <c-select
          placeholder="Select range"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="salesPerMonth"
        >
          <option value="10000">10,000 - 20,000</option>
          <option value="20000">20,000 - 30,000</option>
          <option value="30000">30,000 - 40,000</option>
          <option value="40000">40,000 - 50,000</option>
          <option value="50000">50,000 - 60,000</option>
          <option value="60000">60,000 - 70,000</option>
          <option value="70000">70,000 - 80,000</option>
          <option value="80000">80,000 - 90,000</option>
          <option value="90000">90,000 - 100,000</option>
        </c-select>
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Business employee count</c-form-label>
        <c-select
          placeholder="Select range"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="employeeCount"
        >
          <option value="5">5 - 10</option>
          <option value="10">10 - 15</option>
          <option value="15">15 - 20</option>
          <option value="20">20 - 25</option>
          <option value="25">25 - 30</option>
          <option value="30">30 - 40</option>
          <option value="40">40 - 50</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact designation</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.contact_designation"
        />
      </c-form-control>
      </c-flex>
      <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact name</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.contact_name"
        />
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939">Contact telephone</c-form-label>
        <!-- <c-input-group>
          <c-input-left-addon
            border-color="#999999"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
            >+234</c-input-left-addon
          > -->
          <c-input
            type="tel"
            placeholder="phone number"
            border-radius="7"
            border-color="#999999"
            box-shadow="0 0 0 0 #E27253"
            bg="#FFFAF9"
            v-model="form.contact_telephone"
          />
        <!-- </c-input-group> -->
      </c-form-control>
    </c-flex>
    <c-text as="p" color="#393939">
      By setting up, you agree to our <c-box as="span" fontWeight="bold">Terms Use</c-box> and <c-box as="span" fontWeight="bold">Privacy Policy</c-box>
    </c-text>
    <c-box w="100%" mt="8">
      <c-button
        w="100%"
        size="lg"
        color="#FFFFFF"
        border-radius="8px"
        bg="#E27253;"
        border="1px"
        :_hover="{bg: '#E27253'}"
        :_focus="{boxShadow: 'none'}"
        :_active="{bg: '#E27253'}"
        border-color="#E27253" @click="setUp"
        :disabled="isDisabled"
      >
        Set up
      </c-button>
    </c-box>
  </c-box>
</template>

<script>
export default {
  props: ['isDisabled'],
  data () {
    return {
      form: {
        business_sales_channels: [],
        contact_telephone: '+234'
      },
      salesChannel: '',
      existingCustomer: '',
      employeeCount: '',
      salesPerMonth: ''
    }
  },
  methods: {
    setUp () {
      this.form.business_sales_channels[0] = parseInt(this.salesChannel)
      this.form.business_average_existing_customer = parseInt(this.existingCustomer)
      this.form.business_employee_count = parseInt(this.employeeCount)
      this.form.business_average_sales_per_month = parseInt(this.salesPerMonth)
      this.$emit('create-account', this.form)
    }
  }
}
</script>
