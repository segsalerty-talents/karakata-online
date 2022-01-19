<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <c-box p="3" m="auto" bg="tomato" font-weight="bold" color="white">
      Chakra UI Vue Box
    </c-box>
    <c-button>
      Hello world!
    </c-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
