<template>
  <c-box position="relative">
    <navbar />
    <sidebar />
      <c-box :ml="{ base: 'auto', md: '288px'}">
        <router-view />
        <!-- <footer-admin /> -->
      </c-box>
  </c-box>
</template>

<script>
import Navbar from '@/components/TheHeader'
import Sidebar from '@/components/TheSidebar'
export default {
  name: 'admin-layout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
