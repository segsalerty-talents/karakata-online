<template>
<div class="register">
  <header class="container">
    <c-image :src="require('@/assets/img/Logo1.svg')" w="80px" />
  </header>
  <div class="">
    <request-access />
  </div>
</div>
</template>

<script>
import RequestAccess from '@/components/auth/RequestAccess'

export default {
  components: {
    RequestAccess
  }
}
</script>

<style scoped lang="css">
.register {
  width: 100%;
  height: 100%;
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
