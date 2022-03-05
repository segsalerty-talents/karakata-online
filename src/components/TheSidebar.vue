<template>
  <c-box
    position="absolute"
    bg="#E27253"
    h="100vh"
    w="288px"
  >
  <c-flex
    display="flex"
    mt="30px"
    w="100%"
    justify="center">
    <c-image :src="require('@/assets/img/Logo2.svg')" w="120px" />
  </c-flex>
  <c-box pr="15px" pl="15px" mt="80px">
  <c-list styleType="none">
    <template v-for="(item,index) in topLink">
      <c-list-item
        :bg="$route.path === item.url ? '#FFBC9F':''"
        :_hover="{bg: '#FFBC9F'}"
        p="15px"
        borderRadius="10px"
        :key="index"
      >
        <c-link as="router-link"
          :to="item.url"
          :_hover="{decoration: 'none'}"
        >
        <c-image
          :src="item.icon"
          w="25px"
          mr="15px"
          display="inline-block"
        />
        <c-box
          as="span"
          fontSize="25px"
          color="#fff"
          verticalAlign="middle"
          :fontWeight="$route.path === item.url ? 'bold':''"
        >
          {{ item.name }}
        </c-box>
        </c-link>
      </c-list-item>
    </template>
  </c-list>
  </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      topLink: [
        {
          url: '/admin/dashboard',
          name: 'Dashboard',
          icon: require('@/assets/img/dashboard-icon.svg')
        },
        {
          url: '/admin/sales',
          name: 'Sales',
          icon: require('@/assets/img/users.svg')
        }
      ]
    }
  }
}
</script>
