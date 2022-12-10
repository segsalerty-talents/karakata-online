<template>
  <c-box :w="['90%', null, '900px', '1100px']" mx="auto" my="8">
    <c-box>
      <a style="cursor: pointer;display:inline" @click="$router.push({name: 'Home'})"><img src="@/assets/img/logo.png" alt="logo" /></a>
    </c-box>
    <c-flex align="center" justify="between" my="8">
      <c-box :flex-basis="{ base: '100%', md: '50%' }">
        <c-box mb="3">
        <!-- <c-alert v-show="error" status="error">
          <c-alert-icon />
          <c-alert-title :mr="2">Your browser is outdated!</c-alert-title>
          <c-alert-description>{{ error }}</c-alert-description>
          <c-close-button @click="error = '' " position="absolute" right="8px" top="8px" />
        </c-alert> -->
        </c-box>
        <c-box mb="8">
          <c-text font-size="40px" font-weight="bold" mb="1" color="#C16951">Set Password</c-text>
          <c-heading as="h5" size="sm" color="#393939" fontWeight="400">
            {{ description }}
          </c-heading>
        </c-box>
        <c-form-control v-show="isFirst" mb="6">
          <c-form-label
            for="email_username"
            color="#393939" fontWeight="400"
          >
            Pass Code</c-form-label
          >
          <c-input
            v-model="passCode"
            id="pass_code"
            bg="#FFFAF9"
            box-shadow="0 0 0 0 #E27253"
            border-color="#999999"
            border-radius="7"
            fontSize="14px"
            autocomplete="off"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
            @blur="v$.passCode.$touch()"
            @focus="v$.passCode.$reset()"
          />
          <c-text
            mt="2"
            fontWeight="400"
            color="red.400"
            v-if="v$.passCode.$error"
            >Pass code is required</c-text
          >
        </c-form-control>
        <c-form-control v-show="!isFirst" mb="6">
          <c-form-label
            for="password"
            color="#393939" fontWeight="400"
          >
            Password</c-form-label
          >
          <c-input
            v-model="password"
            id="password"
            bg="#FFFAF9"
            box-shadow="0 0 0 0 #E27253"
            border-color="#999999"
            border-radius="7"
            fontSize="14px"
            autocomplete="off"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
          />
          <c-text
            mt="2"
            fontWeight="400"
            color="red.400"
            v-if="v$.password.$error"
            >Password is required</c-text
          >
        </c-form-control>
        <c-form-control v-show="!isFirst" mb="6">
          <c-form-label
            for="confirm_password"
            color="#393939" fontWeight="400"
          >
            Confirm Password</c-form-label
          >
          <c-input
            v-model="confirmPassword"
            id="confirm_password"
            bg="#FFFAF9"
            box-shadow="0 0 0 0 #E27253"
            border-color="#999999"
            border-radius="7"
            fontSize="14px"
            autocomplete="off"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
            @blur="v$.confirmPassword.$touch()"
            @focus="v$.confirmPassword.$reset()"
          />
          <c-text
            mt="2"
            fontWeight="400"
            color="red.400"
            v-if="v$.confirmPassword.$error"
            >Confirmation password is required</c-text
          >
        </c-form-control>
        <c-button
          v-show="isFirst"
          @click="(isFirst=false,description='Please enter new password')"
          bg="#E27253"
          color="#ffffff"
          mt="1em"
          w="full"
          border-radius="8px"
          border="1px"
          border-color="#E27253"
          :_hover="{ opacity: 0.8, borderColor: '#C16951', color: '#fff' }"
          :_focus="{ opacity: 0.8, borderColor: '#C16951', color: '#fff' }"
          size="lg"
          py="1.5em"
        >
          Continue
        </c-button>
        <c-button
          v-show="!isFirst"
          @click="submit"
          bg="#E27253"
          color="#ffffff"
          mt="1em"
          w="full"
          border-radius="8px"
          border="1px"
          border-color="#E27253"
          :_hover="{ opacity: 0.8, borderColor: '#C16951', color: '#fff' }"
          :_focus="{ opacity: 0.8, borderColor: '#C16951', color: '#fff' }"
          size="lg"
          py="1.5em"
          :disabled="isDisabled"
        >
          Set Password
        </c-button>
        <!-- <c-box
          mt="2em"
          :display="[ 'flex', 'none' ]"
          justify-content="center"
          align-items="center"
          :font-size="{ base: '14px', md: '16px', lg: '18px' }"
        >
          <c-text color="#393939">Don't have an account?</c-text> <c-button bg="none" p="0" :font-size="{ base: '14px', md: '16px', lg: '18px' }" cursor="pointer" color="#C16951" :_hover="{bg: 'none'}" ml="10px" @click="$router.push({name: 'Register'})">Set Up</c-button>
        </c-box> -->
      </c-box>
      <c-box
        :flex-basis="{ base: '100%', md: '50%' }"
        ml="10"
        :display="[ 'none', 'block' ]"
      >
        <img
          src="@/assets/img/login-illustration.svg"
          alt="login-illustration"
        />
        <c-box
          mt="2em"
          display="flex"
          justify-content="center"
          align-items="center"
          :font-size="{ base: '14px', md: '16px', lg: '18px' }"
        >
          <!-- <c-text color="#393939">Don't have an account?</c-text> <c-button bg="none" p="0" :font-size="{ base: '14px', md: '16px', lg: '18px' }" cursor="pointer" color="#C16951" :_hover="{bg: 'none'}" ml="10px" @click="$router.push({name: 'Register'})">Set Up</c-button> -->
        </c-box>
      </c-box>
    </c-flex>
  </c-box>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Api from '../../api/api'

export default {
  name: 'SetPassword',
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      email: '',
      password: '',
      passCode: '',
      confirmPassword: '',
      type: 'password',
      error: '',
      pageTitle: '',
      description: 'Please enter confirmation code sent to your mail.',
      isFirst: true,
      isDisabled: false
    }
  },
  validations () {
    return {
      password: { required },
      passCode: { required },
      confirmPassword: { required }
    }
  },
  created () {
    document.title = 'Set Password | Karakata'
  },
  methods: {
    submit () {
      this.isDisabled = true
      if (this.v$.$invalid) {
        this.isDisabled = false
        return this.v$.$validate()
      }
      if (this.password !== this.confirmPassword) {
        this.isDisabled = false
        return this.$toast({
          title: 'Error',
          description: 'Confirmation password does not match',
          status: 'warning',
          duration: 5000,
          position: 'top-right',
          variant: 'top-accent',
          isClosable: false
        })
      }
      const form = {
        pass_code: this.passCode,
        password: this.password,
        business_id: this.$route.query.business_id
      }
      Api.post('/account/auth/set-password', form).then((res) => {
        this.$toast({
          title: 'Success',
          description: 'Account created successfully',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          variant: 'top-accent',
          isClosable: false
        })
        this.$router.push({ path: '/sign-in' })
      }).catch(err => {
        const error = err?.response?.data?.error?.validation_error
        if (error) {
          const errors = Object.values(error)
          for (const item of errors) {
            this.$toast({
              title: 'Error',
              description: item,
              status: 'warning',
              duration: 5000,
              position: 'top-right',
              variant: 'top-accent',
              isClosable: false
            })
          }
        }
        this.isDisabled = false
      })
    },
    showPassword () {
      this.type === 'password' ? this.type = 'text' : this.type = 'password'
    }
  }
}
</script>

<style lang="scss" scoped></style>
