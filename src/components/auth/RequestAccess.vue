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
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business country</c-form-label>
        <c-select
          placeholder="Select a country"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_country"
        >
          <option>Nigeria</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business state</c-form-label>
        <c-select
          placeholder="Select a state"
          color="#999999"
          border-radius="7"
          border-color="#999999"
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
      </c-form-control>
    </c-flex>
    <c-flex w="100%" mr="-7.5" ml="-7.5" :direction="{ base: 'column', md: 'row' }">
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business year of establishment</c-form-label
        >
        <c-select
          placeholder="Select a year"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_stated_sing_year"
        >
          <option v-for="(num, index) in 32" :value="2023 - num" :key="index">{{ 2023 - num }}</option>
        </c-select>
      </c-form-control>
      <c-form-control w="100%" mr="7.5" ml="7.5" pb="5" is-required>
        <c-form-label for="fname" color="#393939" fontWeight="400">Business month of establishment</c-form-label>
        <c-select
          placeholder="Select a month"
          color="#999999"
          border-radius="7"
          border-color="#999999"
          box-shadow="0 0 0 0 #E27253"
          bg="#FFFAF9"
          v-model="form.business_started_since_month"
        >
          <option v-for="(month, index) in months" :value="month" :key="index">{{ month }}</option>
        </c-select>
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
          @click="$emit('next-stage',form)"
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
          Next
        </c-button>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
export default {
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      form: {
        business_telephone: '+234'
      }
    }
  }
}
</script>
