<template>
  <div>
    <!-- <sidebar /> -->
    <div class="relative md:ml-64 bg-blueGray-100">
      <!-- <admin-navbar /> -->
      <!-- <header-stats /> -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <!-- <footer-admin /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-layout',
  components: {
  }
}
</script>
