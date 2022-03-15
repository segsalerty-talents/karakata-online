<template>
  <div>
    <section class="relative w-full h-full py-40 min-h-screen">
      <router-view />
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  transition: all .3s ease-in;
  background: #E27253;
  border-radius: 10px;
  color: white;
}
</style>
