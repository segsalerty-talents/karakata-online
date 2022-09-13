<template>
<div class="register">
  <header class="container">
    <c-image :src="require('@/assets/img/Logo1.svg')" w="80px" />
  </header>
  <div class="container">
    <c-stack spacing="3" v-if="step === 1">
      <c-heading as="h1" size="xl" color="#C16951">
        Set up
      </c-heading>
      <c-heading as="h5" size="sm" color="#393939" fontWeight="400">
        Tell us a little about your business, let us process your access on Karakata.
      </c-heading>
    </c-stack>
    <c-stack spacing="3" v-if="step === 2">
      <c-box>
        <c-button
          :width="{ base: '100%', sm: 'auto' }"
          @click="step = 1"
          left-icon="chevron-left"
          size="sm"
          fontWeight="400"
          color="#E27253"
          border-radius="18px"
          bg="transparent"
          border="1px"
          border-color="#E27253"
          :_hover="{bg: '#E27253', color: '#FFFFFF'}"
          :_focus="{boxShadow: 'none'}"
          :_active="{bg: '#E27253'}"
        >
          Previous
        </c-button>
      </c-box>
      <c-heading as="h1" size="xl" color="#C16951">
        Set up
      </c-heading>
      <c-heading as="h5" size="sm" color="#393939" fontWeight="400">
        Tell us a little about your business, inorder to process your access on Karakata.
      </c-heading>
    </c-stack>
    <c-flex :direction="{ base: 'column', sm: 'row' }" mt="8">
      <c-box width="100%">
        <request-access v-if="step === 1" @next-stage="nextStage"/>
        <set-up v-if="step === 2" @prev-stage="prevStage" />
      </c-box>
      <c-box :display="[ 'none', 'block' ]" width="100%" mt="-40">
        <c-image :src="require('@/assets/img/Mobilelogin-amico1.svg')" />
      </c-box>
    </c-flex>
  </div>
</div>
</template>

<script>
import RequestAccess from '@/components/auth/RequestAccess'
import SetUp from '@/components/auth/SetUp'

export default {
  components: {
    RequestAccess,
    SetUp
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    nextStage () {
      this.step++
    },
    prevStage () {
      this.step--
    }
  }
}
</script>

<style scoped lang="css">
.register {
  width: 100%;
  height: 100%;
}
.register input {
  width: 100%;
}
.register .container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
}

@media (min-width: 576px) {
  .register .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .register .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .register .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .register .container {
    max-width: 1140px;
  }
}
</style>
