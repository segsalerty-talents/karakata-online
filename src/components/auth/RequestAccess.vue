<template>
  <c-box width="100%" mr="1" mb="1">
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business name</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_name"
        />
        <c-box v-show="error.business_name" as="small" color="red.500">{{ error.business_name | capitalize }}</c-box>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business telephone</c-form-label>
        <!--<c-input-group>
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
            v-model="form.business_telephone"
          />
          <c-box v-show="error.business_telephone" as="small" color="red.500">{{ error.business_telephone | capitalize }}</c-box>
        <!-- </c-input-group> -->
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business email address</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_email"
        />
        <c-box v-show="error.business_email" as="small" color="red.500">{{ error.business_email | capitalize }}</c-box>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business address</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_address"
        />
        <c-box v-show="error.business_address" as="small" color="red.500">{{ error.business_address | capitalize }}</c-box>
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business country</c-form-label>
        <c-select
          placeholder="Select a country"
          color="#393939"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_country"
        >
          <option>Nigeria</option>
        </c-select>
         <c-box v-show="error.business_country" as="small" color="red.500">{{ error.business_country | capitalize }}</c-box>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business state</c-form-label>
        <c-select
          placeholder="Select a state"
          color="#393939"
          border-radius="7"
          border-color="#393939"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_state"
        >
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="FCT">Federal Capital Territory</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
        </c-select>
        <c-box v-show="error.business_state" as="small" color="red.500">{{ error.business_state | capitalize }}</c-box>
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business year of establishment</c-form-label
        >
        <c-select
          placeholder="Select a year"
          color="#393939"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_stated_sing_year"
        >
          <option v-for="(num, index) in 32" :value="2023 - num" :key="index">{{ 2023 - num }}</option>
        </c-select>
         <c-box v-show="error.business_stated_sing_year" as="small" color="red.500">{{ error.business_stated_sing_year | capitalize }}</c-box>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business month of establishment</c-form-label>
        <c-select
          placeholder="Select a month"
          color="#393939"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_started_since_month"
        >
          <option v-for="(month, index) in months" :value="month" :key="index">{{ month }}</option>
        </c-select>
         <c-box v-show="error.business_started_since_month" as="small" color="red.500">{{ error.business_started_since_month | capitalize }}</c-box>
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <!-- <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business kind</c-form-label>
        <c-input
          id="fname"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
        />
      </c-form-control> -->
      <c-flex w="100%" :justify="{base: 'center', md: 'start'}" ml="7.5" align="center">
        <c-button
          @click="validateData"
          :disabled="!formValid || !isEnabled"
          w="100%"
          size="lg"
          color="#FFFFFF"
          border-radius="8px"
          bg="#E27253"
          border="1px"
          border-color="#E27253"
          :_hover="{bg: '#E27253'}"
          :_focus="{boxShadow: 'none'}"
          :_active="{bg: '#E27253'}"
        >
          {{ isEnabled === true ? 'Next':'Please wait...' }}
        </c-button>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
import Api from '../../api/api'
export default {
  props: ['formData'],
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      form: {},
      error: {},
      isEnabled: true
    }
  },
  created () {
    this.form = this.formData
  },
  computed: {
    formValid () {
      return Object.keys(this.form).every((value) => {
        return this.form[value]
      })
    }
  },
  methods: {
    async validateData () {
      try {
        this.isEnabled = false
        this.error = {}
        await Api.post('/verify/account/auth/signup', this.form)
      } catch (err) {
        this.isEnabled = true
        const errors = err?.response?.data?.error?.validation_error
        // Filter array of Objects by key
        const keys = ['business_telephone', 'business_name', 'business_email', 'business_address', 'business_country', 'business_state', 'business_stated_sing_year', 'business_started_since_month']
        this.error = Object.keys(errors)
          .filter(key => keys.includes(key))
          .reduce((obj, key) => {
            obj[key] = errors[key]
            return obj
          }, {})
        if (Object.keys(this.error).length === 0) return this.$emit('next-stage', this.form)
      }
    }
  }
}
</script>
