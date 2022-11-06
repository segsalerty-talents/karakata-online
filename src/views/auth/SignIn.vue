<template>
  <c-box :w="['90%', null, '900px', '1100px']" mx="auto" my="8">
    <c-box>
      <img src="@/assets/img/logo.png" alt="logo" />
    </c-box>
    <c-flex align="center" justify="between" my="8">
      <c-box :flex-basis="{ base: '100%', md: '50%' }">
        <c-box mb="8">
          <c-text font-size="40px" font-weight="bold" mb="1" color="#C16951">Login</c-text>
          <c-text
            color="#393939"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Welcome back, Login to continue
          </c-text>
        </c-box>
        <c-form-control mb="6">
          <c-form-label
            for="email_username"
            color="#393939"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Email Address or username</c-form-label
          >
          <c-input
            v-model="email"
            p="6"
            id="email_username"
            background-color="#FFFFFF"
            focus-border-color="#999999"
            border-color="#999999"
            border-radius="10"
            mt="1"
            :_hover="{ boxShadow: 'sm' }"
            :_focus="{ background: '#ffffff' }"
            @blur="v$.email.$touch()"
            @focus="v$.email.$reset()"
          />
          <c-text
            mt="2"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
            color="red.400"
            v-if="v$.email.$error"
            >Email or username is required</c-text
          >
        </c-form-control>
        <c-form-control mb="6">
          <c-form-label
            for="password"
            color="#393939"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Password</c-form-label
          >
          <c-box position="relative">
            <c-input
              v-model="password"
              p="6"
              id="password"
              :type="type"
              background-color="#FFFFFF"
              focus-border-color="#999999"
              border-color="#999999"
              border-radius="10"
              mt="1"
              :_hover="{ boxShadow: 'sm' }"
              :_focus="{ background: '#ffffff' }"
              @blur="v$.password.$touch()"
              @focus="v$.password.$reset()"
            />
            <c-box @click="showPassword" cursor="pointer" position="absolute" top="50%" right="1em"
            transform="translateY(-50%)">
            <svg v-if="type === 'password'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
            </c-box>
          </c-box>
          <c-text
            mt="3"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
            color="red.400"
            v-if="v$.password.$error"
            >Password is required</c-text
          >
        </c-form-control>
        <c-flex align="center" justify="space-between">
          <c-box>
            <c-checkbox
              color="#393939"
              :font-size="{ base: '14px', md: '16px', lg: '18px' }"
            >
              Remember me
            </c-checkbox>
          </c-box>
          <c-box
            color="#333333"
            text-decoration="underline"
            :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          >
            Forgot Password?
          </c-box>
        </c-flex>
        <c-button
          @click="submit"
          bg="#C16951"
          color="#ffffff"
          :font-size="{ base: '14px', md: '16px', lg: '18px' }"
          mt="1em"
          w="full"
          border-radius="10"
          border="1px"
          border-color="#C16951"
          :_hover="{ bg: '#ffffff', borderColor: '#C16951', color: '#C16951' }"
          :_focus="{ bg: '#ffffff', borderColor: '#C16951', color: '#C16951' }"
          variant-color="blue"
          size="md"
          py="1.5em"
        >
          Login
        </c-button>
        <c-box
          mt="2em"
          :display="[ 'flex', 'none' ]"
          justify-content="center"
          align-items="center"
          :font-size="{ base: '14px', md: '16px', lg: '18px' }"
        >
          <c-text color="#393939">Don't have an account?</c-text> <c-button bg="none" p="0" :font-size="{ base: '14px', md: '16px', lg: '18px' }" cursor="pointer" color="#C16951" :_hover="{bg: 'none'}" ml="10px" @click="$router.push({name: 'Register'})">Set Up</c-button>
        </c-box>
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
          <c-text color="#393939">Don't have an account?</c-text> <c-button bg="none" p="0" :font-size="{ base: '14px', md: '16px', lg: '18px' }" cursor="pointer" color="#C16951" :_hover="{bg: 'none'}" ml="10px" @click="$router.push({name: 'Register'})">Set Up</c-button>
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
  name: 'signIn',
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      email: '',
      password: '',
      type: 'password'
    }
  },
  validations () {
    return {
      email: { required },
      password: { required }
    }
  },
  methods: {
    submit () {
      if (this.v$.$invalid) {
        this.v$.$validate()
      } else {
        const form = {
          email: this.email,
          password: this.password
        }
        Api.post('/account/auth/login', form)
        // this.$router.push({ path: '/admin' })
      }
    },
    showPassword () {
      this.type === 'password' ? this.type = 'text' : this.type = 'password'
    }
  }
}
</script>

<style lang="scss" scoped></style>
