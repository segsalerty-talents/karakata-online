<template>
  <c-box :w="['90%', null, '900px', '1100px']" mx="auto" my="8">
    <c-box>
      <img src="@/assets/img/logo.png" alt="logo" />
    </c-box>
    <c-flex align="center" justify="between" my="8">
      <c-box :flex-basis="{ base: '100%', md: '50%' }">
        <c-box mb="8">
          <c-text font-size="40px" font-weight="bold" mb="1">Login</c-text>
          <c-text
            color="#666666"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Welcome back, Login to continue
          </c-text>
        </c-box>
        <c-form-control mb="6">
          <c-form-label
            for="email_username"
            color="#999999"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Email Address or username</c-form-label
          >
          <c-input v-model="name"
            p="5"
            id="email_username"
            box-shadow="md"
            background-color="#FFFAF9"
            focus-border-color="#E27253"
            border-color="#E27253"
            border-radius="10"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
          />
          <small
              :class="{ 'red.400': v$.name.$error }"
              v-if="v$.name.$error"
              >Email or username is required</small
            >
        </c-form-control>
        <c-form-control mb="6">
          <c-form-label
            for="password"
            color="#999999"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Password</c-form-label
          >
          <c-input v-model="password"
            p="5"
            id="password"
            type="password"
            box-shadow="md"
            background-color="#FFFAF9"
            focus-border-color="#E27253"
            border-color="#E27253"
            border-radius="10"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
          />
          <small
              :class="{ 'red.400': v$.password.$error }"
              v-if="v$.password.$error"
              >Password is required</small
            >
        </c-form-control>
        <c-flex align="center" justify="space-between">
          <c-box>
            <c-checkbox
              color="#999999"
              :font-size="{ base: '14px', md: '16px', lg: '18px' }"
            >
              Remember me
            </c-checkbox>
          </c-box>
          <c-box
            color="#333333"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Forgot Password?
          </c-box>
        </c-flex>
        <c-button
        @click="submit"
          bg="#E27253"
          color="#ffffff"
          :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          mt="4em"
          w="full"
          border-radius="10"
          border="1px"
          border-color="#E27253"
          :_hover="{ bg: '#ffffff', borderColor: '#E27253', color: '#E27253' }"
          :_focus="{ bg: '#ffffff', borderColor: '#E27253', color: '#E27253' }"
          variant-color="blue"
          size="md"
          p="5"
        >
          Sign In
        </c-button>
      </c-box>
      <c-box
        :flex-basis="{ base: '100%', md: '50%' }"
        ml="10"
        :display="{ base: 'none', sm: 'block' }"
      >
        <img
          src="@/assets/img/login-illustration.svg"
          alt="login-illustration"
        />
      </c-box>
    </c-flex>
  </c-box>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'signIn',
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      name: '',
      password: ''
    }
  },
  validations () {
    return {
      name: { required },
      password: { required }
    }
  },
  methods: {
    submit () {
      if (this.v$.$invalid) {
        this.v$.$validate()
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
